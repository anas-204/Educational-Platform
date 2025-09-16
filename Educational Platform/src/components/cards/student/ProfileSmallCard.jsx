import "../../../../styles/ProfileSmallCard.css";
export default function ProfileSmallCard(props) {
  return (
    <>
      <div
        className="profileSmallCard text-center card"
        style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <span className={`${props.className}`}>{props.icon}</span>
        <p
          className="m-1 text-black"
          style={{ color: "hsl(var(--foreground)) !important" }}
        >
          {props.count}
        </p>
        <p className="m-1 ">{props.text}</p>
      </div>
    </>
  );
}
