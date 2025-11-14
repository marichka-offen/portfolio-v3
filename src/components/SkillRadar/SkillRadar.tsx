import { useRef, useEffect } from "react"
import { select, scaleLinear, line, curveCardinalClosed } from "d3"
import "./SkillRadar.scss"
import type { DataPoint } from "@/types"
import { tags } from "@/data/tags"

export default function SkillRadar() {
  const containerRef = useRef(null)
  const margin = { top: 20, right: 10, bottom: 60, left: 10 },
    width = 1024 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom

  const data: DataPoint[] = [
    {
      "UX & Interaction": 0.80,
      "Shopify / E-Commerce": 0.88,
      "Engineering": 0.93,
      "Systems & Architecture": 0.76,
      "Collaboration": 0.92,
      "Tooling": 0.65,

    }
  ]

  useEffect(() => {
    const svgRoot = select(containerRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

    const svg = svgRoot.append("g")

    const skills = Object.keys(data[0])
    const radius = 300
    const ticks = [0.1, 0.2, 0.4, 0.6, 0.8, 1.0]
    const dxOffsets = ["-10px", "-220px", "-230px", "-10px", "15px", "15px"]
    const dyOffsets = ["25px", "15px", "-5px", "-15px", "-5px", "10px"]

    const radAxis = scaleLinear().domain([0.1, 1.0]).range([0, radius])

    const cordForAngle = (angle: number, len: number) => ({
      x: Math.cos(angle) * len,
      y: Math.sin(angle) * len,
    })

    const lineGen = line<{ x: number; y: number }>()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(curveCardinalClosed.tension(1))

    const getCoordPath = (dataPoint: DataPoint) =>
      skills.map((attr, i) => {
        const angle = Math.PI / 2 + (2 * Math.PI * i) / skills.length
        return cordForAngle(angle, radAxis(dataPoint[attr]))
      })

    const drawAxesLabelsAndTags = () => {
      skills.forEach((label, i) => {
        const angle = Math.PI / 2 + (2 * Math.PI * i) / skills.length
        const { x, y } = cordForAngle(angle, radius)
        const cx = x + width / 2
        const cy = y + height / 2

        // axis line
        svg
          .append("line")
          .attr("x1", width / 2)
          .attr("y1", height / 2)
          .attr("x2", cx)
          .attr("y2", cy)
          .attr("stroke", "rgb(0, 11, 0)")
          .attr("stroke-width", 1.5)
          .style("opacity", 0.15)

        // main label
        svg
          .append("text")
          .attr("class", "skill-radar__label")
          .attr("x", cx)
          .attr("y", cy)
          .attr("dx", dxOffsets[i])
          .attr("dy", dyOffsets[i])
          .text(label)


        const dxTagOffsets = [5, -210, -220, 0, 20, 25]
        const tagDirections = [1.2, 1.2, 1.2, -1.2, -1.2, 1.2]
        const tagBaseOffsets = [50, 40, 20, -40, -30, 35]
        const tagSpacing = 18
        // tags
        tags[label].forEach((tag, idx) => {
          const group = svg.append("g")
            .attr("transform", `translate(${cx}, ${cy})`)

          // TAG TEXT
          const text = group.append("text")
            .attr("class", "skill-radar__tag")
            .attr("dx", dxTagOffsets[i])
            .attr("dy", tagBaseOffsets[i] + tagDirections[i] * (idx * tagSpacing))
            .text(tag)

          // MUST read bounding box after text is drawn
          const textNode = text.node() as SVGGraphicsElement | null
          if (!textNode) return
          const bbox = textNode.getBBox()

          // BACKGROUND RECT
          group.insert("rect", "text")   // insert BEFORE the text
            .attr("x", bbox.x - 6)
            .attr("y", bbox.y - 3)
            .attr("width", bbox.width + 12)
            .attr("height", bbox.height + 6)
            .attr("rx", 8)
            .attr("ry", 8)
            .attr("fill", "rgba(255,255,255,0.4)") // or your color
            .attr("stroke", "rgba(0,11,0,0.1)")
        })
      })
    }

    const drawCircles = () => {
      ticks.forEach((t) => {
        svg
          .append("circle")
          .attr("cx", width / 2)
          .attr("cy", height / 2)
          .attr("r", radAxis(t))
          .attr("fill", "none")
          .attr("stroke", "rgb(0, 11, 0)")
          .attr("opacity", 0.15)
          .attr("stroke-width", 1.0)
      })

      const defs = svg.append("defs")
      const innerR = radAxis(0.6)

      defs.append("path")
        .attr("id", "inner-text-path")
        .attr("d", `
          M ${width / 2}, ${height / 2 - innerR}
          a ${innerR} ${innerR} 0 1 1 -0.01 0
        `)

      svg.append("text")
        .append("textPath")
        .attr("href", "#inner-text-path")
        .attr("startOffset", "92%")
        .attr("text-anchor", "middle")
        .text("Comfortable")

      defs.append("path")
        .attr("id", "outer-text-path")
        .attr("d", `
          M ${width / 2}, ${height / 2 - radAxis(1)}
          a ${radAxis(1)} ${radAxis(1)} 0 1 1 -0.01 0
        `)

      svg.append("text")
        .append("textPath")
        .attr("href", "#outer-text-path")
        .attr("startOffset", "91%")
        .attr("text-anchor", "middle")
        .attr("class", "radar-ring-label")
        .text("Proficient")

    }

    const drawGradient = () => {
      const defs = svg.append("defs")
      const rg = defs
        .append("radialGradient")
        .attr("id", "radarRadial")
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "70%")

      rg.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#DCE35B")
        .attr("stop-opacity", 0.5)

      rg.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#45B649")
        .attr("stop-opacity", 0.5)
    }

    const drawShape = () => {
      const coords = getCoordPath(data[0])

      svg
        .append("path")
        .datum(coords)
        .attr("class", "areapath")
        .attr("d", lineGen)
        .attr("stroke-width", 1.5)
        .attr("stroke", "none")
        .attr("fill", "url(#radarRadial)")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
    }

    drawAxesLabelsAndTags()
    drawCircles()
    drawGradient()
    drawShape()
  }, [])



  return (
    <svg
      className="skill-radar"
      viewBox={`0 0 ${width} ${height}`}
      ref={containerRef}
    ></svg>
  )
}
