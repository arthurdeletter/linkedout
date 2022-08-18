import "./input-option.css";

export const InputOption = ({ title, icon: Icon, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
};
