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
  color: hsl(var(--foreground));
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
  }
`;
const TheStage = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const Number = styled.div`
  gap: 0.5rem;
  align-items: center;
  display: flex;
  span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
export default function DistributionOfStudents() {
  const myScore = 1;
  const highScore = 3;

  return (
    <Card>
      <Header>
        <h3>توزيع الاختبارات حسب المادة</h3>
      </Header>
      <div className="p-4 pt-0">
        <div>
          <TheStage>
            <span>رياضيات</span>
            <Number>
              <span>1 اختبارات</span>
              <div>
                <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
                  <Progress
                    aria-label="Attendance"
                    value={myScore ? (myScore / highScore) * 100 : 0}
                    className="w-[150px]"
                  />
                </div>
              </div>
            </Number>
          </TheStage>
          <TheStage>
            <span>فيزياء</span>
            <Number>
              <span>1 اختبارات</span>
              <div>
                <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
                  <Progress
                    aria-label="Attendance"
                    value={myScore ? (myScore / highScore) * 100 : 0}
                    className="w-[150px]"
                  />
                </div>
              </div>
            </Number>
          </TheStage>
          <TheStage>
            <span>كيمياء</span>
            <Number>
              <span>1 اختبارات</span>
              <div>
                <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
                  <Progress
                    aria-label="Attendance"
                    value={myScore ? (myScore / highScore) * 100 : 0}
                    className="w-[150px]"
                  />
                </div>
              </div>
            </Number>
          </TheStage>
        </div>
      </div>
    </Card>
  );
}
