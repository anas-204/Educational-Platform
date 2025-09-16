import styled from "styled-components";

const Card = styled.div`
  --tw-shadow: var(--shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
`;
const CardHeader = styled.div`
  padding: 1.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    letter-spacing: -0.025em;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: hsl(var(--foreground));
  }
`;

const Icon = styled.div`
  color: hsl(var(--muted-foreground));
  width: 1rem;
  height: 1rem;
  margin-top: -8px;
`;
const CardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0px;
  div {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    color: hsl(var(--primary-dark));
  }
  p {
    color: hsl(var(--muted-foreground));
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
export default function ControlPannelSmallCard({ titel, icon, number, info }) {
  return (
    <Card>
      <CardHeader>
        <h4>{titel}</h4>
        <Icon>{icon}</Icon>
      </CardHeader>
      <CardContent>
        <div>{number}</div>
        <p>{info}</p>
      </CardContent>
    </Card>
  );
}
