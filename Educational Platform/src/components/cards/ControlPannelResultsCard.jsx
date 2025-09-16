import styled from "styled-components";
import { Trophy } from "lucide-react";
import { CircularProgress } from "@heroui/react";

const Card = styled.div`
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card));
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  h4 {
    letter-spacing: -0.025em;
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
    color: hsl(var(--foreground));
    gap: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      width: 1.25rem;
      height: 1.25rem;
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
  padding: 1rem;
  padding-top: 0;

  > *:not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const ResultItem = styled.div`
  padding: 0.75rem;
  background-color: hsl(var(--accent));
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: hsl(var(--foreground));
  }
  p {
    margin: 0.25rem 0;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
  }
`;

const Score = styled.div`
  text-align: right;

  :last-child {
    color: hsl(var(--primary-dark));
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }
`;

export default function ControlPannelResultsCard({ results }) {
  return (
    <Card>
      <CardHeader>
        <h4>
          <Trophy />
          نتائج الاختبارات الأخيرة
        </h4>
        <p>أداؤك في الاختبارات الأخيرة</p>
      </CardHeader>
      <CardContent>
        {results.map((test, index) => (
          <ResultItem key={index}>
            <Left>
              <h4>{test.subject}</h4>
              <p>{test.date}</p>
            </Left>
            <Score>
              <CircularProgress
                label="التقدير"
                showValueLabel={true}
                size="lg"
                value={test.score}
                strokeWidth={1.5}
              />
            </Score>
          </ResultItem>
        ))}
      </CardContent>
    </Card>
  );
}
