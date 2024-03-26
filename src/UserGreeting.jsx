function UserGreeting(props) {
  const welcomeMassage = (
    <h1 className="welcome-message">Welcome {props.name}</h1>
  );

  const loginMassage = (
    <h1 className="login-message">press the Button to login</h1>
  );
  if (props.isLoggedIn) {
    return welcomeMassage;
  } else {
    return  loginMassage;
  }
}
export default UserGreeting;