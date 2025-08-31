import styled from "styled-components";
import SeesionCard from "../../src/components/DashBoard/Sessions/SeesionCard";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function SessionsPage() {
  return (
    <div >
      <div className=" my-4">
        <h3>الجلسات التعليمية</h3>
        <p>عرض جميع الجلسات المسجلة والقادمة</p>
      </div>
      <Body>
        <SeesionCard
          title="مقدمة في الرياضيات"
          status="مكتملة"
          date="2025-01-15"
          hour="10:00"
          duration="90 دقيقة"
        />
        <SeesionCard
          title="الفيزياء - الحركة"
          status="قادمة"
          date="2025-01-18"
          hour="14:00"
          duration="90 دقيقة"
        />
        <SeesionCard
          title="الكيمياء العضوية"
          status="قادمة"
          date="2025-01-20"
          hour="16:00"
          duration="90 دقيقة"
        />
      </Body>
    </div>
  );
}
