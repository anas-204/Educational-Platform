import {
  Card,
  CardHeader,
  CardContent,
} from "../../student/ControlPannelHomeWork";
import { FileText } from "lucide-react";
import styled from "styled-components";
export default function ControlPannelMissions({ missions }) {
  const CardContentInfo = styled.div`
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    div {
      border-radius: 0.75rem;
      padding: 1rem;
      border-width: 1px;
      border-color: hsl(var(--border));

      h4 {
        text-align: right;
        font-weight: 500 !important;
        margin-bottom: 0.5rem;
        font-size: 16px;
      }
      div {
        justify-content: space-between;
        align-items: center;
        display: flex;
        border: none;
        span {
          text-align: right;
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
      transition: all 0.3s;
    }
  `;
  const Button = styled.button`
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0 0.75rem;
    color: white;
    background-color: #6d28d9;
    border-radius: 10px;
    white-space: nowrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 2.25rem;
    display: inline-flex;
  `;
  return (
    <Card>
      <CardHeader>
        <h4>
          <FileText />
          المهام المعلقة
        </h4>
        <p>المهام في انتظار التسليم</p>
      </CardHeader>
      <CardContent>
        <CardContentInfo>
          {missions.map((assignment, index) => (
            <div key={index} style={{}}>
              <h4>{assignment.title}</h4>
              <div>
                <span> {assignment.total}</span>
                <Button>استعراض</Button>
              </div>
            </div>
          ))}
        </CardContentInfo>
      </CardContent>
    </Card>
  );
}
