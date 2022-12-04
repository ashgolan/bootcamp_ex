import AddFarmer from "./AddFarmer";

function Actions(props) {
  return (
    <div>
      <button>Add Farmer</button>
      <AddFarmer data={props.data} setData={props.setData}></AddFarmer>
    </div>
  );
}
export default Actions;
