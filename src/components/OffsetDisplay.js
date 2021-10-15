const OffsetDisplay = (props) => {
  const { type, offset } = props;

  return (
    <g className={`offset-${type}`}>
      <path 
        d="M 86,12 
          A 12,12 -45,0,1 98,0
          H 122 
          A 12,12 -45,0,1 134,12
          A 12,12 45,0,1 122,24
          H 98
          A 12,12 45,0,1 86,12" 
        fill={offset > 0 
          ? '#00CC99' : offset < 0 
          ? '#FC440F' : '#898290'}
      />
      
      {offset !== 0 &&
        <path 
          d="M 98,8 l -3,3 m 3,-3 l 3,3 m -3,-3 V 16" 
          fill="transparent" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          transform={offset < 0 ? "rotate(180, 98, 12)" : ""}
        />
      }
      <text x={offset !== 0 ? "115" : "110"} y="12" fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="white">
        {offset > 0 ? `+${offset}` : offset}
      </text>
    </g>
  );
}

export default OffsetDisplay;
