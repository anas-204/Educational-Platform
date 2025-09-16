import "../../../../styles/trailsBigCard.css";
import { Progress } from "@heroui/react";

export default function trailsBigCard(props) {
  return (
    <div
      className="trailsBigCard card py-3 px-3 my-4 col-11 ms-4 "
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <div className="header d-flex justify-content-between px-2">
        <div className="title">
          <h6 style={{ color: "hsl(var(--foreground))" }}>{props.title}</h6>
          <p>{props.subject}</p>
        </div>
        <div
          className={`status ${props.status ? "done" : "notDone"} text-center`}
        >
          <p style={{ color: "hsl(var(--primary-dark)) !important" }}>
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
              style={{ color: "hsl(var(--foreground))" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
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
            <div className="det d-flex gap-1 mb-2">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                النتيجة العليا :{" "}
              </p>
              <p>{props.maxGrade}</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              style={{ color: "hsl(var(--foreground))" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-target mb-3 ms-1"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <div className="det d-flex gap-1 mb-2">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                نتيجتي :{" "}
              </p>
              <p>{props.currentGrade ? props.currentGrade : "لم يتم بعد"}</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              style={{ color: "hsl(var(--foreground))" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clock h-5 w-5 mb-3 ms-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className="det d-flex gap-1 mb-2">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                المحاولات :{" "}
              </p>
              <p>{props.trails ? props.trails : 0}/3</p>
            </div>
          </div>
          <div className="d-flex col-md-3 align-items-center gap-1 justify-content-center">
            <svg
              style={{ color: "hsl(var(--foreground))" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clock h-5 w-5 mb-3 ms-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className="det d-flex gap-1 mb-2">
              <p style={{ color: "hsl(var(--foreground)) !important" }}>
                {" "}
                المدة :
              </p>
              <p>{props.duration} دقيقة</p>
            </div>
          </div>
        </div>
        {props.currentGrade ? (
          <div className="percent d-flex justify-content-between">
            <p
              className="m-0"
              style={{ color: "hsl(var(--foreground)) !important" }}
            >
              نسبة النجاح
            </p>
            <p className="m-0">
              {(props.currentGrade / props.maxGrade) * 100} %
            </p>
          </div>
        ) : (
          ""
        )}
        {props.currentGrade ? (
          <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
            <Progress
              aria-label="Loading..."
              value={
                props.currentGrade
                  ? (props.currentGrade / props.maxGrade) * 100
                  : 0
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="btns d-flex gap-2 flex-wrap">
        {props.trails > 0 && props.trails < 3 && props.trails != 0 ? (
          <button className="btn col-1 getDet bg-danger-subtle">
            إعادة المحاولة (متبقي {3 - props.trails})
          </button>
        ) : (
          " "
        )}
        {props.trails ? (
          ""
        ) : (
          <button className="btn col-1 getDet bg-success-subtle">
            بدء التجربة
          </button>
        )}
        <button
          className="btn col-1 getDet"
          style={{ color: "hsl(var(--foreground))" }}
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}
