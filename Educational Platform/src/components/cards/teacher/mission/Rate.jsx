import React from "react";
import styled from "styled-components";
import { Progress } from "@heroui/react";

const Card = styled.div`
  --tw-shadow: var(--shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
`;
const Header = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  h3 {
    letter-spacing: -0.025em;
    line-height: 1;
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    color: hsl(var(--foreground));
  }
`;
const Body = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;
const Subject = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  > span:first-of-type {
    font-weight: 500 !important;
    color: hsl(var(--foreground));
  }
  > span:last-of-type {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
`;
export default function TheBestStudent() {
  const total = 6;
  const score = 3;
  return (
    <Card>
      <Header>
        <h3>معدل التسليم</h3>
      </Header>
      <Body>
        <Subject>
          <span>حل المعادلات التربيعية</span>
          <span>80%</span>
        </Subject>
        <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
          <Progress
            aria-label="Attendance"
            value={score ? (score / total) * 100 : 0}
          />
        </div>
      </Body>
      <Body>
        <Subject>
          <span>تجربة قوانين نيوتن</span>
          <span>80%</span>
        </Subject>
        <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
          <Progress
            aria-label="Attendance"
            value={score ? (score / total) * 100 : 0}
          />
        </div>
      </Body>
      <Body>
        <Subject>
          <span>تقرير عن التفاعلات الكيميائية</span>
          <span>80%</span>
        </Subject>
        <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
          <Progress
            aria-label="Attendance"
            value={score ? (score / total) * 100 : 0}
          />
        </div>
      </Body>
    </Card>
  );
}
