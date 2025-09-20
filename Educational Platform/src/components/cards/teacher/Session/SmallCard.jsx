import styled from "styled-components";

const Card = styled.div`
  --tw-shadow: var(--shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
  div {
    text-align: center;
    padding: 1rem;
  }
`;
const Number = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: hsl(var(--foreground));
`;
const Titel = styled.p`
  color: hsl(var(--muted-foreground));
  font-size: 0.75rem;
  line-height: 1rem;
`;
const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  vertical-align: middle;
`;
export default function ControlPannelSmallCard({ icon, titel, number }) {
  return (
    <Card>
      <div>
        <Icon>{icon}</Icon>
        <Titel>{titel}</Titel>
        <Number>{number}</Number>
      </div>
    </Card>
  );
}
