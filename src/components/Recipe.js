import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({
  recipe: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} width="240" />
      <div>
        <p>
          <BsAlarm /> {time} min
        </p>
        <p>
          <HiOutlineChartPie /> {servings} servings
        </p>
        <p>
          <HiOutlineChartBar /> {calories} calories
        </p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <span>{difficulty}</span>
      </div>
    </div>
  );
};
