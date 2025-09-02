import styled from "styled-components";
import { Pencil } from "lucide-react";

const Card = styled.div`
  margin: 1.5rem 0;
  --tw-shadow: var(--shadow-soft);
  --tw-shadow-colored: var(--shadow-soft);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  color: hsl(var(--card-foreground));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
`;
const CardHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  h4 {
    letter-spacing: -0.025em;
    line-height: 1;
    font-weight: 600;
    font-size: 1.5rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
  p {
    margin: 0.375rem 0;
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
const CardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
  border-color: hsl(var(--border));
`;
const CardContentInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  gap: 1rem;
  div {
    padding: 0.75rem;
    background-color: hsl(var(--warning) / 0.1);
    border-color: hsl(var(--warning) / 0.2);
    border-width: 1px;
    border-radius: 0.75rem;
    h4 {
      font-weight: 500;
      font-size: 1rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }
    p {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: none;
      flex-wrap: wrap;
      border: none;
      //   @media (max-width: 767px) {
      //     gap: 5px;
      //   }
      span {
        color: hsl(var(--warning));
        font-size: 0.875rem;
        line-height: 1.25rem;
        flex-wrap: no-wrap;
      }
    }
  }
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
export default function ControlPannelHomeWork({ assignments }) {
  return (
    <Card>
      <CardHeader>
        <h4>
          <Pencil />
          الواجبات المعلقة
        </h4>
        <p>المهام في انتظار التسليم</p>
      </CardHeader>
      <CardContent>
        <CardContentInfo>
          {assignments.map((assignment, index) => (
            <div key={index}>
              <h4>{assignment.title}</h4>
              <p>المادة: {assignment.subject}</p>
              <div>
                <span>موعد التسليم: {assignment.dueDate}</span>
                <Button>تسليم</Button>
              </div>
            </div>
          ))}
        </CardContentInfo>
      </CardContent>
    </Card>
  );
}
