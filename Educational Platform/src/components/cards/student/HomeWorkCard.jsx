import "../../../../styles/homeWorkCard.css";
export default function HomeWorkCard(props) {
  return (
    <div
      className="homeWorkCard card py-3 px-3 mb-4 col-11"
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border)) ",
      }}
    >
      <div className="header d-flex justify-content-between px-2">
        <div className="title">
          <h6 style={{ color: "hsl(var(--foreground)) !important" }}>
            {props.title}
          </h6>
          <p>{props.subject}</p>
        </div>
        <div className="status text-center">
          <p>{props.status}</p>
        </div>
      </div>
      <div className="body">
        <p style={{ color: "hsl(var(--foreground)) !important" }}>
          {props.description}
        </p>
        <div className="dates d-flex col-10 col-sm-12 col-12 gap-sm-4 gap-3">
          <div className="required d-flex col-md-3 align-items-center gap-3">
            <i className="bi bi-calendar4"></i>
            <div className="det">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                تاريخ التكليف
              </p>
              <p>{props.requiredDate}</p>
            </div>
          </div>
          <div className="submitSec d-flex col-md-3 align-items-center gap-3">
            <i className="bi bi-clock"></i>
            <div className="det">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                تاريخ التسليم
              </p>
              <p>{props.endDate}</p>
            </div>
          </div>
          {props.submitDate ? (
            <div className="isSubmitted d-flex align-items-center gap-3 col-md-3 ">
              <i className="bi bi-check2-circle"></i>
              <div className="det">
                <p style={{ color: "hsl(var(--foreground)) !important" }}>
                  تم التسليم في
                </p>
                <p>{props.submitDate}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <button
        className="btn col-1 getDet"
        style={{ color: "hsl(var(--foreground)) !important" }}
      >
        عرض التفاصيل
      </button>
    </div>
  );
}
