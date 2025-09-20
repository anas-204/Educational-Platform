import styled from "styled-components";
import { Calendar, Clock, Users, Eye } from "lucide-react";

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
  font-size: 1.5rem !important;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    font-weight: 600 !important;
    color: hsl(var(--foreground));
  }
`;

const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) =>
    status === "مجدولة"
      ? "#7c3aed"
      : status === "مؤكدة"
      ? "#0ea5e9"
      : "#6b7280"};
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
    svg {
      margin-left: 5px !important ;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 1rem;
  font-size: 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.5rem;
  background: hsl(var(--background));
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: hsl(var(--primary-dark));
    color: hsl(var(--background));
  }
`;

export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "الكيمياء - التفاعلات العضوية",
      status: "مكتملة",
      date: "2025-01-22",
      duration: "75 دقيقة",
      students: "6 طالب حضر",
    },
  ];
  return (
    <Wrapper>
      <Title>الجلسات المكتملة حديثاً</Title>
      {sessions.map((session) => (
        <SessionBox key={session.id}>
          <Header>
            <h3>{session.title}</h3>
            <Badge status={session.status}>{session.status}</Badge>
          </Header>

          <InfoRow>
            <div>
              <Calendar size={16} color="hsl(var(--primary-dark))" />
              {session.date}
            </div>

            <div>
              <Clock size={16} color="hsl(var(--primary-dark))" />
              {session.duration}
            </div>
            <div>
              <Users size={16} color="hsl(var(--primary-dark))" />
              {session.students}
            </div>
          </InfoRow>

          <Actions>
            <ActionBtn>
              <Eye size={16} /> التقرير
            </ActionBtn>
          </Actions>
        </SessionBox>
      ))}
    </Wrapper>
  );
}
