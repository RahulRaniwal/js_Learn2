import { Props } from "./Person.types";
const Person = ({ name }: Props) => {
  return (
    <div>
      <h2>
        {name.first} {name.last}
      </h2>
    </div>
  );
};

export default Person;
