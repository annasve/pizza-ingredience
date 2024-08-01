import React, { useState } from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
}

const Topping: React.FC<IToppingProps> = ({ topping }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    // topping.selected = !topping.selected;
  };
  return (
    <div className="topping">
      <Check checked={checked} onChange={handleChange} />
      <span className="topping__content">
        {/* {topping.selected ? 'yes' : 'no'} */}
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
