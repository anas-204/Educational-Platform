import HomeWorkCard from "../../src/components/cards/HomeWorkCard";
import "../../styles/homeWork.css";
export default function Homework() {
  return (
    <>
      <div className="homeWorkContainer">
        <div className="header">
          <h3>الواجبات المنزلية </h3>
          <p>عرض جميع الواجبات وحالة التسليم</p>
        </div>
        <div className="body">
          <HomeWorkCard
            title="حل مسائل الجبر"
            subject="رياضيات"
            describtion="حل المسائل من الصفحة 45 إلى 50"
            status="تم التسليم "
            requiredDate="2025-01-10"
            submitDate="2025-01-18"
            endDate="2025-01-20"
            id="1"
          />
          <HomeWorkCard
            title="تجربة الحركة المتسارعة"
            subject="فيزياء"
            describtion="تقرير عن تجربة قانون نيوتن الثاني"
            status="قيد الإنجاز"
            requiredDate="2025-01-15"
            submitDate=""
            endDate="2025-01-25"
            id="2"
          />
          <HomeWorkCard
            title="القطاعات الكيميائية"
            subject="كيمياء"
            describtion="عن أدوات القطاعات الكيميائية مع رسم توضيحي"
            status="قيد الإنجاز"
            requiredDate="2025-01-05"
            submitDate=""
            endDate="2025-01-21"
            id="3"
          />
        </div>
      </div>
    </>
  );
}
