import DeleteBtn from "./DeleteBtn";
const Overview = (props) => {
  return (
    <div className="tasks">
      {props.tasks.map((task) => (
        <div key={task.id}>
          {task.order}. {task.title}{" "}
          {/* <button
            className="deleteBtn"
            onClick={
              // () => console.log(task)
              () => props.deleteTask(task)
            }
          >
            delete
          </button> */}
          <DeleteBtn task={task} deleteTask={props.deleteTask} />
        </div>
      ))}
    </div>
  );
};

export default Overview;

// just render our tasks
// use .map to map over task array - provide a unique key to each item
