import styled from "styled-components";
import SessionCard from "../../src/components/cards/SessionCard";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function SessionsPage() {
  return (
    <div>
      <div className="">
        <h3>الجلسات التعليمية</h3>
        <p>عرض جميع الجلسات المسجلة والقادمة</p>
      </div>
      <Body>
        <SessionCard
          title="مقدمة في الرياضيات"
          status="مكتملة"
          date="2025-01-15"
          hour="10:00"
          duration="90 دقيقة"
        />
        <SessionCard
          title="الفيزياء - الحركة"
          status="قادمة"
          date="2025-01-18"
          hour="14:00"
          duration="90 دقيقة"
        />
        <SessionCard
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
