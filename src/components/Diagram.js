import Bar from './Bar';
import NormBar from './NormBar';
import Offset from './Offset';
import Legend from './Legend';

const Diagram = (props) => {
  const data = props.data;
  const baseline = 348;
  const instances = ['dev', 'test', 'prod'];
  const components = ['Клиентская часть', 'Серверная часть', 'База данных'];

  // Расчет коэффициента factor, показывающего, сколько "единиц" размера svg будут отображать один тест  
  const maxBarHeight = 265;
  let maxTestsInst = data.norm;
  instances.forEach(instance => {
    const sumTestsInst = Object.values(data[instance]).reduce((sum, tests) => sum += tests);
    if (sumTestsInst > maxTestsInst) maxTestsInst = sumTestsInst;
  });
  const factor = (maxBarHeight / maxTestsInst).toFixed(3);

  return (
    <svg className='diagram' viewBox="0 0 500 431"  version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>            
        <pattern id="diagonalHatch" width="18" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: '#4AB6E8', 'strokeWidth': 22 }} />
        </pattern>            
      </defs>

      {instances.map(instance => {
        return (
          <Bar key={instance} factor={factor} components={data[instance]} instance={instance} baseline={baseline} />
        );
      })}

      <NormBar factor={factor} tests={data.norm} baseline={baseline} />

      <Offset type='0' instance1={data.dev} instance2={data.test} factor={factor} baseline={baseline} />
      <Offset type='1' instance1={data.test} instance2={data.prod} factor={factor} baseline={baseline} />

      {components.map((component, i) => {
        return (
          <Legend key={component} component={component} index={i} />
        )
      })}
    </svg>
  )
}

export default Diagram;
