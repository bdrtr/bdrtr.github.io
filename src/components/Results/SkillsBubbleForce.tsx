import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3-force';

interface SkillsBubbleForceProps {
  skills: string[];
}

interface BubbleNode {
  id: string;
  radius: number;
  x: number;
  y: number;
}

const WIDTH = 600;
const HEIGHT = 400;

const SkillsBubbleForce: React.FC<SkillsBubbleForceProps> = ({ skills }) => {
  const [nodes, setNodes] = useState<BubbleNode[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Create nodes with random radius
    const initialNodes: BubbleNode[] = skills.map((skill, i) => ({
      id: skill,
      radius: 32 + Math.random() * 32,
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
    }));

    // D3 force simulation
    const simulation = d3.forceSimulation<BubbleNode>(initialNodes)
      .force('charge', d3.forceManyBody().strength(2))
      .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2))
      .force('collision', d3.forceCollide<BubbleNode>().radius(d => d.radius + 4))
      .on('tick', () => {
        setNodes([...initialNodes]);
      });

    return () => simulation.stop();
  }, [skills]);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} width={WIDTH} height={HEIGHT} style={{ maxWidth: '100%', height: 'auto', background: 'none' }}>
        {nodes.map(node => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.radius}
              fill="#10151a"
              stroke="#fff"
              strokeWidth={2}
              style={{ filter: 'drop-shadow(0 2px 8px rgba(16,21,26,0.15))', transition: 'r 0.2s' }}
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dy="0.35em"
              fill="#fff"
              fontSize={node.radius / 2.2}
              fontWeight="bold"
              style={{ pointerEvents: 'none', fontFamily: 'Roboto Mono, Orbitron, monospace' }}
            >
              {node.id[0]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SkillsBubbleForce; 