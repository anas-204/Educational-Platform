import styled from "styled-components";
import { User, Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const Card = styled.div`
  --tw-shadow-colored: var(--shadow-soft);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  color: hsl(var(--card-foreground));
  background-color: hsl(var(--card));
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
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
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
    margin: 0.75rem 0;
  }
`;
const CardInfo = styled.div`
  padding: 0.75rem;
  background-color: hsl(var(--accent));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardInfoRigth = styled.div`
  h4 {
    font-weight: 500;
    font-size: 1rem;
    margin: 0;
  }
  p {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  div {
    font-size: 0.75rem;
    line-height: 1rem;
    color: hsl(var(--muted-foreground));
    gap: 0.5rem;
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;
const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: calc(0.75rem - 2px);
  background-color: hsl(var(--background));
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: hsl(var(--accent)) !important;
    color: hsl(var(--primary)) !important;
  }
`;
export default function ControlPannelCommingSession({ sessions }) {
  const [userType, setUserType] = useState("");
  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <h4>
          <Calendar /> الجلسات القادمة
        </h4>
        {userType === "student" ? (
          <p>جلساتك التعليمية المجدولة</p>
        ) : (
          <p>جلسات التدريس المجدولة</p>
        )}
      </CardHeader>
      <CardContent>
        {sessions.map((session, index) => (
          <div key={index}>
            <CardInfo>
              <CardInfoRigth>
                <h4>{session.subjectName}</h4>
                {userType === "student" ? <p>مع {session.MrName}</p> : ""}
                <div>
                  <Calendar />
                  {session.Date}
                  <Clock style={{ marginLeft: "3px" }} />
                  {session.Time}
                  {userType === "student" ? (
                    ""
                  ) : (
                    <>
                      <User /> {session.studentNumber} طالب
                    </>
                  )}
                </div>
              </CardInfoRigth>
              <Button>{userType === "student" ? "انضمام" : "أدار"}</Button>
            </CardInfo>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
