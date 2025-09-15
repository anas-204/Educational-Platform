import styled from "styled-components";
import { User, Clock, Calendar } from "lucide-react";

const Card = styled.div`
  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-soft);
  color: hsl(0deg 0% 0%);
  border-radius: 0.75rem;
  background-color: hsl(var(--card));
  border: 1px solid #e5e7eb;
  &:hover {
    box-shadow: var(--shadow-medium);
  }
`;

const Header = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    letter-spacing: -0.025em;
    font-weight: 600 !important;
    font-size: 1.25rem !important;
    line-height: 1.75rem;
  }
`;

const Status = styled.span`
  border-radius: 9999px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.25rem 0.75rem;
  color: ${({ status }) =>
    status === "مكتملة" ? "hsl(var(--success))" : "hsl(var(--warning))"};
  background-color: ${({ status }) =>
    status === "مكتملة"
      ? "hsl(var(--success) / 0.2)"
      : "hsl(var(--warning) / 0.2)"};
`;

const Body = styled.div`
  padding: 1.5rem;
  padding-block: 0.5rem;
`;

const BodyInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

const Icon = styled.div`
  color: hsl(var(--muted-foreground));
  width: 1rem;
  height: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: calc(0.75rem - 2px);
  border: 1px solid #ccc;
  background-color: hsl(var(--background));
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: hsl(var(--accent)) !important;
    color: hsl(var(--primary)) !important;
  }
`;

export default function SessionCard({ title, status, date, hour, duration }) {
  return (
    <Card className="card py-3 px-3 mb-4 col-11">
      <Header>
        <HeaderInfo>
          <h3>{title}</h3>
          <Status status={status}>{status}</Status>
        </HeaderInfo>
      </Header>
      <Body>
        <BodyInfo>
          <div>
            <Icon>
              <User />
            </Icon>
            <span>مصطفي الرفاعي</span>
          </div>
          <div>
            <Icon>
              <Calendar />
            </Icon>
            <span>{date}</span>
          </div>
          <div>
            <Icon>
              <Clock />
            </Icon>
            <span>{hour}</span>
          </div>
          <div>
            <Icon>
              <Clock />
            </Icon>
            <span>{duration}</span>
          </div>
        </BodyInfo>
        <Buttons>
          <Button>عرض التفاصيل</Button>
          {status === "قادمة" && (
            <Button style={{ backgroundColor: "#6d28d9", color: "#fff" }}>
              الانضمام للجلسة
            </Button>
          )}
        </Buttons>
      </Body>
    </Card>
  );
}
