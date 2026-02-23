import "./TimerButton.css";

export default function TimerButton(props) {
  return (
    <button className="duration-btn" onClick={props.onClick}>
      {props.value} mins
    </button>
  );
}
