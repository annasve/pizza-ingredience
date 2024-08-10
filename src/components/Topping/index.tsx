import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onCheckChange: (checkmark: boolean) => void;
}

const Topping: React.FC<IToppingProps> = ({ topping, onCheckChange }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onCheckChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
