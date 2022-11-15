function InputBox(props) {
  return (
    <div style={{ padding: "2%" }}>
      <input onChange={props.searching} type="text" />
    </div>
  );
}

export default InputBox;
