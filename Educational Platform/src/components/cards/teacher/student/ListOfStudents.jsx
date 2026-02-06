import styled from "styled-components";
import { CircularProgress } from "@heroui/react";
import apiRequest from "../../../../utils/apiRequest";
import { MessageCircle, Eye, GraduationCap, User, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function ListOfStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      await apiRequest({
        service: "TEACHER_STUDENTS",
      }).then((res) => {
        setStudents(res);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <Header>قائمة الطلاب</Header>
        <div style={{ textAlign: "center", padding: "20px" }}>
          جاري تحميل الجلسات...
        </div>
      </Card>
    );
  }
  return (
    <Card>
      <Header>
        <h3>قائمة الطلاب</h3>
      </Header>
      {/* <div className="p-4 pt-0">
        {students.map((student, index) => (
          <StudentCard key={index} className="mt-3">
            <div className="main">
              <PersonalDetails>
                <span>
                  <img
                    src="https://class-bloom-center.lovable.app/placeholder.svg"
                    alt=""
                  />
                </span>
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.grade}</p>
                  <Subjects className="mb-2">
                    {student.subjects.map((subj, i) => (
                      <div key={i}>{subj}</div>
                    ))}
                  </Subjects>
                </div>
              </PersonalDetails>

              <div className="">
                <LevelDetails>
                  <AttendanceRate>
                    <div>
                      <CircularProgress
                        style={{
                          color: "hsl(var(--muted-foreground))",
                          paddingTop: "5px",
                        }}
                        label="نسبة الحضور"
                        showValueLabel={true}
                        size="lg"
                        value={parseInt(student.attendance)}
                        strokeWidth={1.5}
                      />
                    </div>
                  </AttendanceRate>

                  <AverageGrade>
                    <CircularProgress
                      style={{
                        color: "hsl(var(--primary))",
                        paddingTop: "5px",
                      }}
                      label="متوسط الدرجات"
                      showValueLabel={true}
                      size="lg"
                      value={parseInt(student.attendance)}
                      strokeWidth={1.5}
                    />
                  </AverageGrade>

                  <CompleteSessions>
                    <p>الجلسات المكتملة</p>
                    <p>{student.sessions}</p>
                  </CompleteSessions>

                  <EmailPhoneAndStatus>
                    <div className="details">
                      <div>
                        <GraduationCap /> انضم في {student.joinDate}
                      </div>
                      <div>
                        <Mail /> {student.email}
                      </div>
                      <div>
                        <User /> {student.phone}
                      </div>
                    </div>
                    <div className="status">
                      <div status={student.status}>{student.status}</div>
                    </div>
                  </EmailPhoneAndStatus>
                </LevelDetails>
              </div>

              <Buttons>
                <button>
                  <MessageCircle /> رساله
                </button>
                <button>
                  <Eye /> عرض
                </button>
              </Buttons>
            </div>
          </StudentCard>
        ))}
      </div>{" "} */}
    </Card>
  );
}
/*   */

const Card = styled.div`
  --tw-shadow: var(--shadow-medium);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
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
const StudentCard = styled.div`
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  padding: 1rem;
  border-width: 1px;
  border-radius: 0.75rem;
  background-color: hsl(var(--card));
  border-color: hsl(var(--border));
  .main {
    @media (min-width: 1024px) {
      align-items: center;
    }
    @media (min-width: 1024px) {
      flex-direction: row;
    }
    gap: 1rem;
    flex-direction: column;
    display: flex;
  }
`;
const PersonalDetails = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;
  span {
    overflow: hidden;
    display: flex;
    position: relative;
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      display: block;
      vertical-align: middle;
    }
  }
  div {
    h3 {
      font-weight: 600 !important;
      font-size: 1.125rem !important;
      line-height: 1.75rem;
      color: hsl(var(--foreground));
    }
    p {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
const Subjects = styled.div`
  gap: 0.5rem;
  display: flex;
  margin-top: 0.25rem;
  div {
    text-align: right;
    color: hsl(var(--foreground));
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.125rem 0.625rem;
    border-width: 1px;
    border-radius: 9999px;
    align-items: center;
    display: inline-flex;
    border-color: hsl(var(--border));
  }
`;
const LevelDetails = styled.div`
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  display: grid;
  const AttendanceRate = styled.div p {
    text-align: right;
    color: hsl(var(--muted-foreground));
  }
  > div:first-of-type {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    span {
      text-align: right;
      font-weight: 500;
      margin-top: -8px;
    }
  }
`;
const AttendanceRate = styled.div`
  :last-child {
    color: hsl(var(--secondary-dark));
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    padding-top: 5px;
  }
`;
const AverageGrade = styled.div`
  :last-child {
    color: hsl(var(--success));
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    padding-top: 5px;
  }
`;
const CompleteSessions = styled.div`
  > p:first-of-type {
    color: hsl(var(--muted-foreground));
  }
  > p:last-of-type {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
const EmailPhoneAndStatus = styled.div`
  width: 1000pc;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  margin-inline: auto;

  align-items: center;
  display: flex;
  justify-content: space-between;
  .details {
    @media (max-width: 638px) {
      flex-direction: column;
      div {
        width: 145px;
      }
    }
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.25rem;
    gap: 1rem;
    align-items: center;
    display: flex;
    div {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }
  .status {
    color: hsl(var(--primary-foreground));
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.125rem 0.625rem;
    border-color: transparent;
    border-width: 1px;
    border-radius: 9999px;
    align-items: center;
    display: inline-flex;
    background-color: ${({ status }) =>
      status === "نشط" ? "hsl(var(--primary))" : "hsl(var(--secondary))"};
  }
`;
const Buttons = styled.div`
  gap: 0.5rem;
  display: flex;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
  button {
    --tw-ring-offset-color: hsl(var(--background));
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: hsl(var(--background));
    border-color: hsl(var(--input));
    border-width: 1px;
    border-radius: 10px;
    white-space: nowrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 2.25rem;
    display: inline-flex;
    cursor: pointer;
    background-color: hsl(var(--background));
    transition: all 0.3s;
    color: hsl(var(--foreground));
    &:hover {
      background-color: hsl(var(--accent)) !important;
      color: hsl(var(--primary)) !important;
    }
    svg {
      flex-shrink: 0;
      width: 1rem;
      height: 1rem;
      pointer-events: none;
      margin-left: 0.5rem;
    }
  }
`;
