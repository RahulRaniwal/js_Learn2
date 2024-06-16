type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: Props) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
