import DeleteBtn from "./DeleteBtn";
// just render our tasks
// use .map to map over task array - provide a unique key to each item

const Overview = (props) => {
  return (
    <div className="tasks">
      {props.tasks.map((task) => (
        <div key={task.id}>
          {task.order}. {task.title} <DeleteBtn task={task} />
        </div>
      ))}
    </div>
  );
};

export default Overview;
