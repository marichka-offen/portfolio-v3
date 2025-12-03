import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle, Transform, Vec3, Camera } from "ogl"
import "./SunbeamBackground.scss"

const vertex = `#version 300 es
precision highp float;
layout(location=0) in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`

const fragment = `#version 300 es
precision highp float;

uniform vec3 iResolution;
uniform float iTime;

uniform int blobCount;
uniform vec3 blobData[10];   // xy position in pixels, z radius in pixels
uniform vec3 blobColor[10];

out vec4 outColor;

// ALWAYS VISIBLE radial falloff
float radial(vec2 p, vec2 center, float radius) {
    float d = distance(p, center);
    // Start falloff much closer to the edge so the center stays stronger
    float v = 1.0 - smoothstep(radius * 0.7, radius, d);
    // Slight curve so center is a bit brighter without a hard edge
    return pow(v, 1.2);
}

void main() {
    vec2 uv = gl_FragCoord.xy;

    // Slightly warm white so colors show up better
    vec3 col = vec3(1.0, 0.995, 0.985);

    for (int i = 0; i < blobCount; i++) {
        vec3 bd = blobData[i];
        vec3 bc = blobColor[i];

        float v = radial(uv, bd.xy, bd.z);

        // much stronger contribution (was 0.6)
        float strength = v * 0.95;

        col = mix(col, bc, strength);
    }

    outColor = vec4(col, 1.0);
}
`

type Blob = {
    x: number
    y: number
    radius: number
    color: [number, number, number]
    phase: number
}

function hexTo01(hex: string): [number, number, number] {
    const c = hex.replace("#", "")
    return [
        parseInt(c.slice(0, 2), 16) / 255,
        parseInt(c.slice(2, 4), 16) / 255,
        parseInt(c.slice(4, 6), 16) / 255,
    ]
}

const SunbeamBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const dpr = 1
        const renderer = new Renderer({ dpr, alpha: true })
        const gl = renderer.gl
        gl.clearColor(1, 1, 1, 1)
        container.appendChild(gl.canvas)

        const camera = new Camera(gl, { left: -1, right: 1, top: 1, bottom: -1 })
        camera.position.z = 1

        const geometry = new Triangle(gl)

        // guaranteed visible test colors
        const palette = [
            "#ffe9a3",
            "#ffc7c2",
            "#e8d4ff",
            "#cde0ff",
            "#ffd6e7",
        ]

        let blobs: Blob[] = palette.map((hex, i) => ({
            x: 400 + i * 150, // placeholder
            y: 400,
            radius: 350,
            color: hexTo01(hex),
            phase: i * 1.3,
        }))

        const blobData = Array.from({ length: 10 }, () => new Vec3())
        const blobColor = Array.from({ length: 10 }, () => new Vec3())

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                iResolution: { value: new Vec3(0, 0, 0) },
                iTime: { value: 0 },
                blobCount: { value: blobs.length },
                blobData: { value: blobData },
                blobColor: { value: blobColor },
            },
        })

        const mesh = new Mesh(gl, { geometry, program })
        const scene = new Transform()
        mesh.setParent(scene)

        function resize() {
            if (!container) return
            const w = container.clientWidth
            const h = container.clientHeight

            renderer.setSize(w * dpr, h * dpr)
            gl.canvas.style.width = `${w}px`
            gl.canvas.style.height = `${h}px`

            program.uniforms.iResolution.value.set(w * dpr, h * dpr, 1)

            // recenter blobs
            blobs.forEach((b, i) => {
                blobData[i].set(w * 0.4 + i * 150, h * 0.55, b.radius)
                blobColor[i].set(...b.color)
            })
        }

        window.addEventListener("resize", resize)
        resize()

        const start = performance.now()
        let raf = 0

        function update(t: number) {
            raf = requestAnimationFrame(update)
            const elapsed = (t - start) * 0.001
            program.uniforms.iTime.value = elapsed

            // tiny motion so you can see movement
            blobs.forEach((b, i) => {
                const wobbleX = Math.sin(elapsed * 0.2 + b.phase) * 40
                const wobbleY = Math.cos(elapsed * 0.15 + b.phase * 1.7) * 40

                blobData[i].x += (blobData[i].x + wobbleX - blobData[i].x) * 0.05
                blobData[i].y += (blobData[i].y + wobbleY - blobData[i].y) * 0.05
            })

            renderer.render({ scene, camera })
        }

        raf = requestAnimationFrame(update)

        return () => {
            cancelAnimationFrame(raf)
            container.removeChild(gl.canvas)
        }
    }, [])

    return <div ref={containerRef} className="sunbeam-bg" />
}

export default SunbeamBackground
