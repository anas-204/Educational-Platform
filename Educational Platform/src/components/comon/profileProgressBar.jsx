import { Progress } from "@heroui/react";
export default function ProfileProgressBar(props) {
  const getOverAll = () => {
    const grade = +props.currentGrade;
    if (grade > 90) return "A+";
    if (grade > 85) return "A";
    if (grade > 80) return "B+";
    if (grade > 75) return "B";
    return "";
  };

  const overall = getOverAll();

  return (
    <>
      <div className="profileProgressBar mb-3">
        <div className="subject d-flex justify-content-between align-items-end">
          <p className="m-0">{props.name}</p>
          <p
            className={`${
              overall == "A" ? "A" : overall == "B" ? "B" : "other"
            } m-0 `}
          >
            {overall}
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full mt-2 mb-1 progres rounded-3">
          <Progress aria-label="Loading..." value={+props.currentGrade} />
        </div>
        <p className="m-0 text-start">{props.currentGrade}%</p>
      </div>
    </>
  );
}
