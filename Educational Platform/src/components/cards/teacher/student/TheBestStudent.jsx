import React from "react";
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
  color: hsl(var(--foreground));
`;
const TheStudentContainer = styled.div`
  gap: 0.75rem;
  align-items: center;
  display: flex;
  .number {
    text-align: right;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    --tw-bg-opacity: 1;
    background-color: ${({ rank }) =>
      rank === 1
        ? "rgb(234 179 8 / var(--tw-bg-opacity, 1))"
        : rank === 2
        ? "rgb(156 163 175 / var(--tw-bg-opacity, 1))"
        : "rgb(234 88 12 / var(--tw-bg-opacity, 1))"};

    height: 1.5rem;
    display: flex;
    width: 1.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  span {
    overflow: hidden;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;

      aspect-ratio: 1 / 1;
      max-width: 100%;
    }
  }
`;
const Name = styled.div`
  flex: 1 1 0%;
  > p:first-of-type {
    text-align: right;
    font-weight: bold;
    color: hsl(var(--foreground));
    font-size: 0.875rem !imprtant;
    line-height: 1.25rem;
  }
  > p:last-of-type {
    text-align: right;
    color: hsl(var(--muted-foreground));
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
const Score = styled.div`
  text-align: right;
  > p:first-of-type {
    color: hsl(var(--success));
    font-weight: 700 !important;
    font-size: 1rem !important;
  }
  > p:last-of-type {
    color: hsl(var(--muted-foreground));
    font-size: 1rem !important;
    line-height: 1rem;
  }
`;
export default function TheBestStudent() {
  const students = [
    {
      id: 1,
      name: "براء محمد عبد العزيز",
      grade: "الثالث الثانوي",
      score: "91%",
      attendance: "95٪ حضور",
      image: "https://class-bloom-center.lovable.app/placeholder.svg",
    },
    {
      id: 2,
      name: "نور الدين سامي",
      grade: "الثالث الثانوي",
      score: "89%",
      attendance: "92٪ حضور",
      image: "https://class-bloom-center.lovable.app/placeholder.svg",
    },
    {
      id: 3,
      name: "فاطمة أحمد محمود",
      grade: "الثاني الثانوي",
      score: "85%",
      attendance: "88٪ حضور",
      image: "https://class-bloom-center.lovable.app/placeholder.svg",
    },
  ];
  return (
    <Card>
      <Header>
        <h3>أفضل الطلاب أداءً</h3>
      </Header>
      <div className="p-4 pt-0">
        {students.map((student) => (
          <TheStudentContainer key={student.id} rank={student.id}>
            <div className="number">{student.id}</div>
            <span>
              <img src={student.image} alt={student.name} />
            </span>
            <Name>
              <p>{student.name}</p>
              <p>{student.grade}</p>
            </Name>
            <Score>
              <p>{student.score}</p>
              <p>{student.attendance}</p>
            </Score>
          </TheStudentContainer>
        ))}
      </div>
    </Card>
  );
}
