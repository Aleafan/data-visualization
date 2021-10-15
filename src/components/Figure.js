import Diagram from './Diagram';

const Figure = (props) => {
  return (
    <figure>
        <figcaption>
          Количество пройденных тестов "{props.data.title}"
        </figcaption>

        <Diagram data={props.data}/>
    </figure>
  );
}

export default Figure;
