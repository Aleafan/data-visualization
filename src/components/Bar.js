const Bar = (props) => {
  const { factor, components, instance, baseline } = props;
  const { db, back, front } = components;

  const [dbHeight, backHeight, frontHeight] = [db, back, front].map(tests => tests * factor);

  return (
    <g className={`bar-${instance}`}>
      <g className='component-db'>
        <path         
          d={`M 0, ${baseline - dbHeight}
              H 80
              V 338
              A 10,10 -45,0,1 70,348
              H 10
              A 10,10 -45,0,1 0,338
              Z`}
          fill="#E85498"
        />
        <text x="40" y={baseline - dbHeight / 2} fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="mathematical" fill="white">
          {db}
        </text>
      </g>

      <g className='component-back'>
        <rect         
          x="0" 
          y={baseline - dbHeight - backHeight} 
          width="80" 
          height={Math.ceil(backHeight)} 
          fill="#AA6FAC"
        />
        <text x="40" y={baseline - dbHeight - backHeight / 2} fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="mathematical" fill="white">
          {back}
        </text>
      </g>

      <g className='component-front'>
        <path         
          d={`
            M 0, ${baseline - dbHeight - backHeight}
            v ${-frontHeight + 10}
            a 10,10 -45,0,1 10,-10
            h 60 
            a 10,10 -45,0,1 10,10
            v ${frontHeight - 10}
            z`} 
          fill="#4AB6E8" />
        <text x="40" y={baseline - dbHeight - backHeight - frontHeight / 2} fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="mathematical" fill="white">
          {front}
        </text>
      </g>

      <text x="40" y={+baseline + 21} fontSize="10" textAnchor="middle" dominantBaseline="central" fill="#898290">
        {instance}
      </text>
    </g>
  );
}

export default Bar;
