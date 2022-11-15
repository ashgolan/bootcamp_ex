function Users(props) {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{props.getUsers}</div>
    </div>
  );
}

export default Users;
