const Legend = (props) => {
  const { component, index } = props;
  const colors = ["#4AB6E8", "#AA6FAC", "#E85498"];
  
  return (
    <g className={`legend-${index}`}>
      <rect x="40" y="415" width="16" height="16" rx="3" ry="3" fill={colors[index]} />
      <text x="65" y="423" fontSize="10" textAnchor="start" dominantBaseline="central" fill="#898290">
        {component}
      </text>
    </g>
  );
}

export default Legend;
