import styled from "styled-components";
import QuizzesCard from "../../src/components/cards/student/QuizzesCard";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Quizzes() {
  return (
    <div className="py-3 px-3 mb-4 col-11 ">
      <div className="py-2">
        <h3 style={{ fontWeight: "bold", color: "hsl(var(--foreground))" }}>
          الاختبارات
        </h3>
        <p>عرض جميع الاختبارات والنتائج</p>
      </div>
      <Body>
        <QuizzesCard
          title={"اختبار الرياضيات - الجبر"}
          subject={"رياضيات"}
          status={"مكتملة"}
          highScore={100}
          myScore={85}
          attempts={"1/3"}
          deadline={"2025-01-25"}
        />

        <QuizzesCard
          title={"اختبار الفيزياء - الميكانيكا"}
          subject={"فيزياء"}
          status={"متاح"}
          highScore={50}
          myScore={0}
          attempts={"0/3"}
          deadline={"2025-01-30"}
        />

        <QuizzesCard
          title={"اختبار الكيمياء - التفاعلات"}
          subject={"كيمياء"}
          status={"يمكن إعادة المحاولة"}
          highScore={75}
          myScore={62}
          attempts={"2/3"}
          deadline={"2025-02-05"}
        />
      </Body>
    </div>
  );
}
