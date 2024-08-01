import './style.css';

interface CheckProps {
  checked: boolean;
  onChange: () => void;
}

const Check: React.FC<CheckProps> = ({ checked, onChange }) => {
  const handleClick = () => {
    onChange();
  };

  return (
    <button className="check" onClick={handleClick}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
