function Employee(props) {
  return (
    <>
      <h1>Employee {props.name}</h1>
      <h1>{props.role ? props.role : 'Employee has no role'}</h1>
      {props.role ? (
        <p className="role">{props.role}</p>
      ) : (
        <p className="norole">Employee has no role</p>
      )}
    </>
  );
}
export default Employee;
