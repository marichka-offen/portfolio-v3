import { useEffect, useRef } from 'react';
import './GradientBackground.scss';

// Vertex shader
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    v_uv.y = 1.0 - v_uv.y;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Fragment shader
const fragmentShaderSource = `
  precision mediump float;
  varying vec2 v_uv;
  
  uniform vec2 u_resolution;
  uniform int u_circleCount;
  uniform vec3 u_circlesColor[6];
  uniform vec3 u_circlesPosRad[6];
  uniform float u_reduced_motion;
  
  // Hard-light blend mode (CRITICAL for matching CSS)
  vec3 hardLight(vec3 base, vec3 blend) {
    return vec3(
      blend.r < 0.5 ? 2.0 * base.r * blend.r : 1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r),
      blend.g < 0.5 ? 2.0 * base.g * blend.g : 1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g),
      blend.b < 0.5 ? 2.0 * base.b * blend.b : 1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)
    );
  }
  
  void main() {
    vec2 st = v_uv * u_resolution;
    
    // Base gradient: 40deg from #FAF8FB to #FFFFFF
    float angle = 0.698132;
    float gradientPos = (v_uv.x * cos(angle) + v_uv.y * sin(angle));
    vec3 color1 = vec3(0.98039, 0.97255, 0.98431);
    vec3 color2 = vec3(1.0, 1.0, 1.0);
    vec3 bgColor = mix(color1, color2, gradientPos);
    
    if(u_reduced_motion > 0.5) {
      gl_FragColor = vec4(bgColor, 1.0);
      return;
    }
    
    // Build visible circles with weighted color blending
    float fieldSum = 0.0;
    vec3 weightedColorSum = vec3(0.0);
    
    for(int i = 0; i < 6; i++) {
      if(i >= u_circleCount) break;
      vec3 posRad = u_circlesPosRad[i];
      vec2 cPos = vec2(posRad.r, posRad.g);
      float radius = posRad.b;
      float dist = length(st - cPos);
      float sigma = radius * 0.5;
      float val = exp(-(dist * dist) / (2.0 * sigma * sigma));
      fieldSum += val;
      weightedColorSum += u_circlesColor[i] * val;
    }
    
    vec3 finalCirclesColor = vec3(0.0);
    if(fieldSum > 0.0) {
      finalCirclesColor = weightedColorSum / fieldSum;
    }
    
    float intensity = pow(fieldSum, 1.4);
    vec3 finalColor = mix(bgColor, finalCirclesColor, clamp(intensity, 0.0, 1.0));
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastMoveTimeRef = useRef(Date.now());
  const lastFrameTimeRef = useRef(0);
  const frameCountRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas ref not found');
      return;
    }
    
    console.log('Initializing WebGL GradientBackground...');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    console.log('Prefers reduced motion:', prefersReducedMotion);
    
    // Initialize WebGL
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: true, // CRITICAL: Must be true or canvas will be blank!
      powerPreference: 'low-power',
    });
    
    if (!gl) {
      console.error('WebGL not supported - canvas.getContext returned null');
      return;
    }
    
    console.log('WebGL context created successfully');
    glRef.current = gl;
    
    // Test: Clear to a visible color to verify WebGL is working
    gl.clearColor(0.98, 0.97, 0.98, 1.0); // Light lavender
    gl.clear(gl.COLOR_BUFFER_BIT);
    console.log('Canvas cleared with test color');
    
    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error('Vertex shader compilation error:', gl.getShaderInfoLog(vertexShader));
      gl.deleteShader(vertexShader);
      return;
    }
    
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('Fragment shader compilation error:', gl.getShaderInfoLog(fragmentShader));
      gl.deleteShader(fragmentShader);
      gl.deleteShader(vertexShader);
      return;
    }
    
    // Link program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      gl.deleteShader(fragmentShader);
      gl.deleteShader(vertexShader);
      return;
    }
    
    gl.useProgram(program);
    programRef.current = program;
    
    console.log('Shaders compiled and linked successfully');
    
    // Set up geometry (full-screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    
    // Get uniform locations
    const u_resolution = gl.getUniformLocation(program, 'u_resolution');
    const u_circleCount = gl.getUniformLocation(program, 'u_circleCount');
    const u_circlesColor = gl.getUniformLocation(program, 'u_circlesColor');
    const u_circlesPosRad = gl.getUniformLocation(program, 'u_circlesPosRad');
    const u_reduced_motion = gl.getUniformLocation(program, 'u_reduced_motion');
    
    // Resize canvas
    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u_resolution, canvas.width, canvas.height);
    };
    
    resizeCanvas();
    
    console.log('Canvas resized:', canvas.width, 'x', canvas.height);
    
    // Throttled resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const render = (currentTime: number) => {
      if (!gl || !programRef.current) {
        console.error('Render called but gl or program is null');
        return;
      }
      
      // FPS throttling for idle state
      const timeSinceLastMove = Date.now() - lastMoveTimeRef.current;
      const targetFPS = timeSinceLastMove < 5000 ? 60 : 30;
      const frameInterval = 1000 / targetFPS;
      
      const deltaTime = currentTime - lastFrameTimeRef.current;
      
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(render);
        return;
      }
      
      lastFrameTimeRef.current = currentTime - (deltaTime % frameInterval);
      
      // Set reduced motion flag
      gl.uniform1f(u_reduced_motion, prefersReducedMotion ? 1.0 : 0.0);
      
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Set viewport and uniforms
      gl.viewport(0, 0, width, height);
      gl.uniform2f(u_resolution, width, height);
      gl.uniform1f(u_reduced_motion, prefersReducedMotion ? 1.0 : 0.0);
      gl.uniform1i(u_circleCount, 6);
      
      // Calculate circle sizes (reduced by 25%)
      const baseSize = Math.min(width, height) * 0.6; // Was 0.8, now 75%
      const radius = baseSize / 2;
      const radius5 = (baseSize * 1.5) / 2;
      const radius6 = Math.max(width, height) * 0.375; // Was 0.5, now 75%
      
      // Your colors: rgb(255,230,200), rgb(245,210,220), rgb(230,225,245), rgb(220,210,240), rgb(200,195,230), rgb(168,184,227)
      const colors = [
        1.0, 0.90196, 0.78431,  // Sunbeam
        0.96078, 0.82353, 0.86275,  // Reflected Glow
        0.90196, 0.88235, 0.96078,  // Diffuse Light
        0.86275, 0.82353, 0.94118,  // Haze Shimmer
        0.78431, 0.76471, 0.90196,  // Violet Edge
        0.65882, 0.72157, 0.89020   // Interactive
      ];
      
      let posRadArr = [];
      
      if (!prefersReducedMotion) {
        // Circle 1 (Sunbeam): Vertical oscillation - 40s ease
        const time1 = (Date.now() / 40000) % 1;
        // Ease in-out timing function approximation
        const eased1 = time1 < 0.5 
          ? 2 * time1 * time1 
          : 1 - Math.pow(-2 * time1 + 2, 2) / 2;
        const y1 = Math.sin(eased1 * Math.PI * 2) * baseSize * 0.5;
        const circle1X = centerX;
        const circle1Y = centerY + y1;
        posRadArr.push(circle1X, circle1Y, radius);
        
        // Circle 2 (Reflected Glow): Circular rotation (reversed) - 30s ease
        const time2 = (Date.now() / 30000) % 1;
        const eased2 = time2 < 0.5 
          ? 2 * time2 * time2 
          : 1 - Math.pow(-2 * time2 + 2, 2) / 2;
        const angle2 = -(eased2 * Math.PI * 2);
        const offsetX2 = -400 * (Math.min(width, height) / 800); // Scale offset
        const circle2X = centerX + offsetX2 * Math.cos(angle2);
        const circle2Y = centerY + offsetX2 * Math.sin(angle2);
        posRadArr.push(circle2X, circle2Y, radius);
        
        // Circle 3 (Diffuse Light): Circular rotation (linear) - 50s
        const time3 = (Date.now() / 50000) % 1;
        const angle3 = time3 * Math.PI * 2;
        const offsetX3 = 400 * (Math.min(width, height) / 800);
        const initialOffsetX3 = -500 * (width / 1920);
        const initialOffsetY3 = 200 * (height / 1080);
        const circle3BaseX = centerX + initialOffsetX3;
        const circle3BaseY = centerY + initialOffsetY3;
        const circle3X = circle3BaseX + offsetX3 * Math.cos(angle3);
        const circle3Y = circle3BaseY + offsetX3 * Math.sin(angle3);
        posRadArr.push(circle3X, circle3Y, radius);
        
        // Circle 4 (Haze Shimmer): Horizontal + vertical oscillation - 45s ease
        const time4 = (Date.now() / 45000) % 1;
        const eased4 = time4 < 0.5 
          ? 2 * time4 * time4 
          : 1 - Math.pow(-2 * time4 + 2, 2) / 2;
        const x4 = Math.sin(eased4 * Math.PI * 2) * baseSize * 0.5;
        const y4 = Math.sin(eased4 * Math.PI * 2) * baseSize * 0.1;
        const circle4X = centerX + x4;
        const circle4Y = centerY + y4;
        posRadArr.push(circle4X, circle4Y, radius);
        
        // Circle 5 (Violet Edge): Circular rotation - 35s ease
        const time5 = (Date.now() / 35000) % 1;
        const eased5 = time5 < 0.5 
          ? 2 * time5 * time5 
          : 1 - Math.pow(-2 * time5 + 2, 2) / 2;
        const angle5 = eased5 * Math.PI * 2;
        const offsetX5 = -800 * (Math.min(width, height) / 800);
        const offsetY5 = 200 * (height / 1080);
        const circle5X = centerX + offsetX5 * Math.cos(angle5);
        const circle5Y = centerY + offsetY5 + offsetX5 * Math.sin(angle5);
        posRadArr.push(circle5X, circle5Y, radius5);
        
        // Circle 6: Independent floating animation (25s cycle)
        const time6 = (Date.now() / 25000) % 1;
        const eased6 = time6 < 0.5 
          ? 2 * time6 * time6 
          : 1 - Math.pow(-2 * time6 + 2, 2) / 2;
        const angle6 = eased6 * Math.PI * 2;
        const offsetX6 = 300 * (Math.min(width, height) / 800);
        const offsetY6 = -100 * (height / 1080);
        const circle6X = centerX + offsetX6 * Math.cos(angle6);
        const circle6Y = centerY + offsetY6 + offsetX6 * Math.sin(angle6);
        posRadArr.push(circle6X, circle6Y, radius6);
      } else {
        // Static positions for reduced motion
        posRadArr = [
          centerX, centerY, radius,
          centerX, centerY, radius,
          centerX, centerY, radius,
          centerX, centerY, radius,
          centerX, centerY, radius5,
          centerX, centerY, radius6
        ];
      }
      
      // Pass arrays to shader
      gl.uniform3fv(u_circlesColor, new Float32Array(colors));
      gl.uniform3fv(u_circlesPosRad, new Float32Array(posRadArr));
      
      // Clear and draw
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      // Log first few frames
      frameCountRef.current++;
      if (frameCountRef.current <= 3) {
        console.log(`Frame ${frameCountRef.current} rendered`);
      }
      
      animationFrameRef.current = requestAnimationFrame(render);
    };
    
    console.log('Starting animation loop...');
    animationFrameRef.current = requestAnimationFrame(render);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      
      if (gl && programRef.current) {
        gl.deleteProgram(programRef.current);
      }
    };
  }, []);
  
  return (
    <div className="gradient-background">
      <canvas ref={canvasRef} className="gradient-background__canvas" />
    </div>
  );
}
