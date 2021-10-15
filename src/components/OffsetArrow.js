const OffsetArrow = (props) => {
  const { type, heightBar1, heightBar2, baseline } = props;

  return (
      <path 
        className={`arrow-${type}`}
        d={`M 40, ${baseline - heightBar1 - 9}
            V 12 
            h ${type === '0' ? 45 : 35}
            m 50, 0
            h ${type === '0' ? 35 : 45}
            V ${baseline - heightBar2 - 9}
            l -3.5, -4
            m 3.5, 4
            l 3.5, -4`} 
        fill="transparent"
        stroke="#898290"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />      
  );
}

export default OffsetArrow;
