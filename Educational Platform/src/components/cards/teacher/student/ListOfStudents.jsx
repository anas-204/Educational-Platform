import React from "react";
import styled from "styled-components";
import { Progress } from "@heroui/react";
import { MessageCircle, Eye, GraduationCap, User, Mail } from "lucide-react";
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
`;
const StudentCard = styled.div`
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  padding: 1rem;
  border-width: 1px;
  border-radius: 0.75rem;
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
  p {
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
const AverageGrade = styled.div`
  > p:first-of-type {
    color: hsl(var(--muted-foreground));
  }
  > p:last-of-type {
    color: hsl(var(--success));
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  const CompleteSessions = styled.div > p:first-of-type {
    color: hsl(var(--muted-foreground));
  }
  > p:last-of-type {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
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
const Buttoms = styled.div`
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
export default function ListOfStudents() {
  const students = [
    {
      name: "براء محمد عبد العزيز",
      grade: "الثالث الثانوي",
      subjects: ["رياضيات", "فيزياء"],
      attendance: "95%",
      average: "91%",
      sessions: 28,
      email: "baraa@example.com",
      phone: "01004022722",
      joinDate: "سبتمبر 2024",
      status: "نشط",
    },
    {
      name: "فاطمة أحمد محمود",
      grade: "الثاني الثانوي",
      subjects: ["كيمياء", "أحياء"],
      attendance: "88%",
      average: "85%",
      sessions: 22,
      email: "fatma@example.com",
      phone: "01123456789",
      joinDate: "أكتوبر 2024",
      status: "نشط",
    },
    {
      name: "محمد علي حسن",
      grade: "الأول الثانوي",
      subjects: ["رياضيات"],
      attendance: "72%",
      average: "78%",
      sessions: 15,
      email: "mohamed@example.com",
      phone: "01234567890",
      joinDate: "نوفمبر 2024",
      status: "متوقف",
    },
    {
      name: "نور الدين سامي",
      grade: "الثالث الثانوي",
      subjects: ["فيزياء", "كيمياء"],
      attendance: "92%",
      average: "89%",
      sessions: 35,
      email: "nour@example.com",
      phone: "01987654321",
      joinDate: "أغسطس 2024",
      status: "نشط",
    },
  ];
  return (
    <Card>
      <Header>
        <h3>قائمة الطلاب</h3>
      </Header>

      <div className="pt-0 p-4">
        {students.map((student, index) => (
          <StudentCard key={index} className="mt-3">
            <div className="main">
              {/* بيانات شخصية */}
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
                  <Subjects>
                    {student.subjects.map((subj, i) => (
                      <div key={i}>{subj}</div>
                    ))}
                  </Subjects>
                </div>
              </PersonalDetails>

              {/* تفاصيل المستوى */}
              <div className="flex-fill">
                <LevelDetails>
                  <AttendanceRate>
                    <p>نسبة الحضور</p>
                    <div>
                      <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
                        <Progress
                          aria-label="Attendance"
                          value={parseInt(student.attendance)}
                          className="w-[150px]"
                        />
                      </div>
                      <span>{student.attendance}</span>
                    </div>
                  </AttendanceRate>

                  <AverageGrade>
                    <p>متوسط الدرجات</p>
                    <p>{student.average}</p>
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

              {/* الأزرار */}
              <Buttoms>
                <button>
                  <MessageCircle /> رساله
                </button>
                <button>
                  <Eye /> عرض
                </button>
              </Buttoms>
            </div>
          </StudentCard>
        ))}
      </div>
    </Card>
  );
}
/*   */
