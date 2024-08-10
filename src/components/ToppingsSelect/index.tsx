import { useState } from 'react';
import ITopping from '../../models/Topping';
import Topping from '../Topping';
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [higherToppings, setHigherToppings] = useState(toppings);

  const handleCheckChange = (selectMark: boolean, index: number) => {
    const newToppings = [...higherToppings];
    newToppings[index].selected = selectMark;
    setHigherToppings(newToppings);
  };

  let selectedCount = 0;
  higherToppings.forEach((topping) => {
    if (topping.selected) {
      selectedCount += 1;
    }
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedCount}, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onCheckChange={(checkmark: boolean) =>
              handleCheckChange(checkmark, index)
            }
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
