const NormBar = (props) => {
  const { factor, tests, baseline } = props;

  const barHeight = tests * factor;
  
  return (
    <g className="bar-norm">
      <rect x="0" y={baseline - barHeight} width="80" height={barHeight} rx="10" ry="10" fill="url(#diagonalHatch)" />
      <rect x="16" y={baseline - 12 - barHeight / 2} width="48" height="24" rx="5" ry="5" fill="white" />
      <text x="40" y={baseline - barHeight / 2} fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#898290">
        {tests}
      </text>
      <text x="40" y={+baseline + 21} fontSize="10" textAnchor="middle" dominantBaseline="central" fill="#898290">
        норматив
      </text>
    </g>
  );
}

export default NormBar;
