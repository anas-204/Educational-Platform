import styled from "styled-components";
import { Clock, Star, Award } from "lucide-react";
import { Progress } from "@heroui/react";

const Card = styled.div`
  margin: 0.2rem 0;
  --tw-shadow: var(--shadow-soft);
  --tw-shadow-colored: var(--shadow-soft);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  color: hsl(var(--card-foreground));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
  padding-bottom: 10px;
`;
const CardHeader = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const CardHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    h3 {
      letter-spacing: -0.025em;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    p {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

const Status = styled.span`
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  color: ${({ status }) =>
    status === "مكتملة"
      ? "hsl(var(--success))"
      : status === "متاح"
      ? "hsl(var(--primary))"
      : "hsl(var(--warning))"};

  background-color: ${({ status }) =>
    status === "مكتملة"
      ? "hsl(var(--success) / 0.2)"
      : status === "متاح"
      ? "hsl(var(--primary) / 0.2)"
      : "hsl(var(--warning) / 0.2)"};
`;

const CradContent = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  div {
    gap: 0.5rem;
    align-items: center;
    display: flex;

    svg {
      width: 1rem;
      height: 1rem;
      color: hsl(var(--muted-foreground));
    }

    span {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

const ActionButton = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease-in-out;

  ${({ type }) =>
    type === "start" &&
    `
      background: var(--primary-gradient);
      color: white;
      border: none;
      box-shadow: var(--shadow-soft);
    `}

  ${({ type }) =>
    type === "retry" &&
    `
      background: var(--warning);
      color: black;
      border: 1px solid hsl(var(--border));
    `}

  ${({ type }) =>
    type === "success" &&
    `
      background: var(--background);
      color: hsl(var(--foreground));
      border: 1px solid hsl(var(--border));
    `}

  &:hover {
    box-shadow: var(--shadow-medium);
    background-color: hsl(var(--accent)) !important;
  }
`;

const ProgressWrapper = styled.div`
  margin-top: 1rem;
`;

const ProgressLabel = styled.div`
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  display: flex;
  color: hsl(var(--muted-foreground));
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export default function QuizzesCard({
  title,
  subject,
  status,
  highScore,
  myScore,
  attempts,
  deadline,
}) {
  const percent = Math.round((myScore / highScore) * 100);

  return (
    <Card>
      <CardHeader>
        <CardHeaderInfo>
          <div>
            <h4>{title}</h4>
            <p>{subject}</p>
          </div>
          <Status status={status}>{status}</Status>
        </CardHeaderInfo>
      </CardHeader>

      <div
        style={{
          padding: "1rem",
          paddingTop: "0.2rem",
          paddingBottom: "0.5rem",
        }}
      >
        <CradContent>
          <div>
            <Award />
            <span>النتيجة العليا: {highScore}</span>
          </div>

          {status === "مكتملة" && (
            <div>
              <Star />
              <span>نتيجتي: {myScore}</span>
            </div>
          )}

          <div>
            <Clock />
            <span>المحاولات: {attempts}</span>
          </div>
          <div>
            <Clock />
            <span>الموعد النهائي: {deadline}</span>
          </div>
        </CradContent>

        {(status === "مكتملة" || status === "يمكن إعادة المحاولة") && (
          <ProgressWrapper>
            <ProgressLabel>
              <span>نسبة النجاح</span>
              <span>{percent}%</span>
            </ProgressLabel>
            <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
              <Progress
                aria-label="Loading..."
                value={myScore ? (myScore / highScore) * 100 : 0}
              />
            </div>
          </ProgressWrapper>
        )}

        {status === "متاح" && (
          <Buttons>
            <ActionButton type="start">بدء الاختبار</ActionButton>
            <ActionButton type="success">عرض التفاصيل</ActionButton>
          </Buttons>
        )}

        {status === "يمكن إعادة المحاولة" && (
          <Buttons>
            <ActionButton
              style={{ color: "hsl(var(--foreground))" }}
              type="retry"
            >
              إعادة المحاولة
            </ActionButton>
            <ActionButton type="success">عرض التفاصيل</ActionButton>
          </Buttons>
        )}

        {status === "مكتملة" && (
          <Buttons>
            <ActionButton type="success">عرض التفاصيل</ActionButton>
          </Buttons>
        )}
      </div>
    </Card>
  );
}
