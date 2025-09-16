import "../../../../styles/ProfileSmallCard.css";
export default function ProfileSmallCard(props) {
  return (
    <>
      <div className="profileSmallCard text-center card">
        <span className={`${props.className}`}>{props.icon}</span>
        <p className="m-1 text-black">{props.count}</p>
        <p className="m-1 ">{props.text}</p>
      </div>
    </>
  );
}
