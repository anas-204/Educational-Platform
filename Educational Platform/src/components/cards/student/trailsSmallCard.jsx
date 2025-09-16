import "../../../../styles/trailsSmallCard.css";
export default function trailsSmallCard(props) {
  return (
    <>
      <div className="trailsSmallCard flex-row gap-3 card pe-2 pt-2  ">
        <span className={`pt-3 ${props.className}`}>{props.icon}</span>
        <div className="stats">
          <p className="m-0 text-black">
            <strong>{props.count}</strong>
          </p>
          <p clas>{props.name}</p>
        </div>
      </div>
    </>
  );
}
