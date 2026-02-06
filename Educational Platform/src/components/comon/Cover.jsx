export default function Cover({ show }) {
  return (
    <div
      className="cover"
      style={{
        backgroundColor: "#000000bb",
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: show ? "block" : "none",
        zIndex: 10000,
      }}
    ></div>
  );
}
