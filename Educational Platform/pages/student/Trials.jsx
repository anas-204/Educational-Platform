import TrailsSmallCard from "../../src/components/cards/trailsSmallCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrailsBigCard from "../../src/components/cards/trailsBigCard";

export default function Trials() {
  return (
    <>
      <div className="header mb-3 pt-3 ps-4">
        <h3 style={{ color: "hsl(var(--foreground))" }}>التجارب والاختبارات</h3>
        <p>عرض جميع التجارب والنتائج</p>
      </div>
      <div className="statistics d-flex flex-wrap col-11 col-xl-12  gap-3 gap-xxl-4 justify-content-center justify-content-md-start ps-4">
        <TrailsSmallCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-target"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          }
          name="إجمالي التجارب"
          count="3"
          className="eye1"
        />
        <TrailsSmallCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trophy h-8 w-8 text-success"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          }
          name="تجارب مكتملة"
          count="2"
          className="prize"
        />
        <TrailsSmallCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-target"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          }
          name="متوسط النتائج"
          count="76.5%"
          className="eye2"
        />
        <TrailsSmallCard
          icon={<TrendingUpIcon />}
          name="معدل التحسن"
          count="+12%"
          className="up"
        />
      </div>
      <div className="body">
        <TrailsBigCard
          title="تجربة الرياضيات الشاملة"
          subject="اختبار شامل في الجبر والهندسة"
          status="مكتمل"
          maxGrade="100"
          currentGrade="85"
          trails="3"
          duration="120"
        />
        <TrailsBigCard
          title="تجربة الفيزياء العملية"
          subject="اختبار في الميكانيكا والديناميكا"
          maxGrade="80"
          currentGrade="50"
          trails="1"
          duration="90"
        />
        <TrailsBigCard
          title="تجربة الكيمياء التطبيقية"
          subject="اختبار شامل في التفاعلات والمعادلات"
          maxGrade="75"
          duration="100"
        />
      </div>
    </>
  );
}
