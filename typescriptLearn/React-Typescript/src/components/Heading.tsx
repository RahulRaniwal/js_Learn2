type Props = {
  children: string;
};

const Heading = (props: Props) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};

export default Heading;
