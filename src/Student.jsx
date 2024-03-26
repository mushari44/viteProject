function Student(props) {
  const Age = props.age;
  return (
    <div className="student">
      <p>Name : {props.name} </p>
      <p>Age : {Age}</p>
      <p>is Student : {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
}
export default Student;
