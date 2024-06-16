interface Props {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

const Greet = ({ name, messageCount, isLoggedIn }: Props) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Welcome {name}! You have {messageCount} unread messages.{" "}
        </h1>
      ) : (
        <h1>Hello New User</h1>
      )}
    </div>
  );
};

export default Greet;
