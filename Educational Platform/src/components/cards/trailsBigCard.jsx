import "../../../styles/trailsBigCard.css";
export default function trailsBigCard(props) {
  return (
    <div className="trailsBigCard card py-3 px-3 my-4 col-11">
      <div className="header d-flex justify-content-between px-2">
        <div className="title">
          <h6>{props.title}</h6>
          <p>{props.subject}</p>
        </div>
        <div
          className={`status ${props.status ? "done" : "notDone"} text-center`}
        >
          <p>
            {props.status && props.trails == 3
              ? "مكتمل"
              : props.trails > 0
              ? "يمكن إعادة المحاولة"
              : "متاح"}
          </p>
        </div>
      </div>
      <div className="body">
        <div className="d-flex flex-wrap col-sm-12 col-12 gap-sm-2 gap-lg-0 gap-3">
          <div className="d-flex col-md-3 align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trophy h-5 w-5 mb-3 ms-1 "
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <div className="det d-flex gap-1">
              <p>النتيجة العليا : </p>
              <p>{props.maxGrade}</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-target mb-3 ms-1"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <div className="det d-flex gap-1">
              <p>نتيجتي : </p>
              <p>{props.currentGrade}</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clock h-5 w-5 mb-3 ms-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className="det d-flex gap-1">
              <p>المحاولات : </p>
              <p>{props.trails}/3</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clock h-5 w-5 mb-3 ms-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className="det d-flex gap-1">
              <p> المدة :</p>
              <p>{props.currentGrade} دقيقة</p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn col-1 getDet">عرض التفاصيل</button>
    </div>
  );
}
