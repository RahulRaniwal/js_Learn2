import { Name } from "./Person.types";

type Props = {
  names: Name[];
};

const PersonList = ({ names }: Props) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h4 key={name.first}>
            {name.first} {name.last}
          </h4>
        );
      })}
    </div>
  );
};

export default PersonList;
