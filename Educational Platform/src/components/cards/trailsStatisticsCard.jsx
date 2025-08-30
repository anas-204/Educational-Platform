export default function trailsStatisticsCard(props) {
  return (
    <>
      <div className="trailsStatisticsCard">
        {props.icon}
        <div className="stats">
          <p>{props.trailsCount}</p>
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
}
