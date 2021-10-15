import OffsetArrow from "./OffsetArrow";
import OffsetDisplay from "./OffsetDisplay";

const Offset = (props) => {
  const { type, instance1, instance2, factor, baseline } = props;

  const sumTests1 = Object.values(instance1).reduce((sum, tests) => sum += tests);
  const sumTests2 = Object.values(instance2).reduce((sum, tests) => sum += tests);

  const offset = sumTests2 - sumTests1;

  return (
    <g>
      <OffsetArrow type={type} baseline={baseline} heightBar1={sumTests1 * factor} heightBar2={sumTests2 * factor} />
      <OffsetDisplay type={type} offset={offset} />
    </g>
    
  );
}

export default Offset;
