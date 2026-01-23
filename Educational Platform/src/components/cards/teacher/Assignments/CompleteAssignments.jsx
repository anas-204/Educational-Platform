import styled from "styled-components";
import { Calendar, Users, CheckCircle2, Eye, PieChart } from "lucide-react";

const Wrapper = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 1rem;
  padding: 1rem;
  --tw-shadow: var(--shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
`;

const Title = styled.h3`
  font-weight: 600 !important;
  margin-bottom: 1rem;
  text-align: right;
  letter-spacing: -0.025em;
  font-size: 1.25rem !important;
  color: hsl(var(--foreground));
`;

const SessionBox = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: hsl(var(--card));
`;

const Header = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1rem !important;
    font-weight: 600 !important;
    color: hsl(var(--foreground));
  }
`;

const BadgeAndSubject = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) =>
    status === "مكتمل" ? "#0ea5e9" : "#6b7280"};
`;

const Subject = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: #fff;
  color: #000;
  border: 1px solid #e5e7eb;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
  }
`;

const Points = styled.span`
  font-weight: 500;
`;

const StatusDone = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: green;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #fff;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: -41px;
  &:hover {
    background: hsl(var(--accent));
  }
`;

export default function CompleteMissions() {
  const tasks = [
    {
      id: 1,
      title: "اختبار  عن التفاعلات الكيميائية",
      subject: "كيمياء",
      status: "مكتمل",
      date: "22-01-2025",
      students: "8/8 طالب انهي",
      reslut: "%85",
      points: "15 نقطة",
    },
  ];

  return (
    <Wrapper>
      <Title>الاختبارات المكتملة مؤخراً</Title>
      {tasks.map((task) => (
        <SessionBox key={task.id}>
          <Header>
            <h3>{task.title}</h3>
            <BadgeAndSubject>
              <Badge status={task.status}>{task.status}</Badge>
              <Subject>{task.subject}</Subject>
            </BadgeAndSubject>
          </Header>

          <InfoRow>
            <div>
              <CheckCircle2 size={16} color="green" />
              {task.students}
            </div>
            <div>
              <PieChart size={16} />
              {`متوسط النتائج${task.reslut}`}
            </div>
            <div>
              <Points>{task.points}</Points>
            </div>
            <div>
              <Calendar size={16} />
              انتهى في: {task.date}
            </div>
          </InfoRow>

          <Actions>
            <ActionBtn>
              <Eye size={16} /> النتائج
            </ActionBtn>
            <ActionBtn>
              <PieChart size={16} /> التحليل
            </ActionBtn>
          </Actions>
        </SessionBox>
      ))}
    </Wrapper>
  );
}
