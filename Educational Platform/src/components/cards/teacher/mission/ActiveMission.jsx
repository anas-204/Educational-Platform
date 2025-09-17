import React from "react";
import styled from "styled-components";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Progress } from "@heroui/react";

const Wrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1rem;
  background: hsl(var(--background));
  --tw-shadow: var(--shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
`;

const Title = styled.h3`
  font-weight: 600 !important;
  margin-bottom: 1rem;
  text-align: right;
  letter-spacing: -0.025em;
  font-size: 1.5rem !important;
`;

const SessionBox = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: hsl(var(--card));
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    font-weight: 600 !important;
  }
`;

const BadgeAndSubject = styled.div`
  display: flex;
  gap: 4px;
`;
const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) =>
    status === "نشط" ? "#7c3aed" : status === "مكتمل" ? "#0ea5e9" : "#6b7280"};
`;
const Subject = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: black;
  background-color: white;
  border: 1px solid #e5e7eb;
`;
const Description = styled.p`
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: -15px !important;
  margin-bottom: 14px !important;
`;
const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
  }
`;
const Level = styled.div`
  font-weight: 500;
  color: ${({ status }) =>
    status === "صعب"
      ? "hsl(var(--warning)) !important"
      : status === "متوسط"
      ? "hsl(var(--destructive)) !important"
      : "green !important"};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
const Points = styled.div``;
const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #fff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: hsl(var(--accent));
  }
`;

const SubmittingNumber = styled.div``;
const Count = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
  > span:first-of-type {
    font-weight: 500 !important;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
  > span:last-of-type {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
`;
const Finsh = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
  > span:first-of-type {
    font-weight: 500 !important;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    color: hsl(var(--success));
  }
  > span:last-of-type {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    color: hsl(var(--warning));
  }
`;
export default function ActiveMission() {
  const missions = [
    {
      id: 1,
      title: "حل المعادلات التربيعية",
      subject: "رياضيات",
      status: "نشط",
      description: "حل مجموعة من المعادلات التربيعية باستخدام القانون العام",
      dueDate: "2025-01-25",
      createdAt: "2025-01-18",
      totalStudents: 15,
      submittedStudents: 12,
      corrected: 8,
      waiting: 4,
      level: "متوسط",
      points: 20,
    },
    {
      id: 2,
      title: "تجربة قوانين نيوتن",
      subject: "فيزياء",
      status: "نشط",
      description: "إجراء تجربة عملية لإثبات قوانين نيوتن الثلاثة",
      dueDate: "2025-01-30",
      createdAt: "2025-01-20",
      totalStudents: 10,
      submittedStudents: 3,
      corrected: 0,
      waiting: 3,
      level: "صعب",
      points: 30,
    },
  ];

  const Total = 15;
  const Submitting = 12;
  return (
    <Wrapper>
      <Title>المهام النشطة</Title>
      {missions.map((mission) => (
        <SessionBox key={mission.id}>
          <Header>
            <h3>{mission.title}</h3>
            <BadgeAndSubject>
              <Subject>{mission.subject}</Subject>
              <Badge status={mission.status}>{mission.status}</Badge>
            </BadgeAndSubject>
          </Header>

          <Description>{mission.description}</Description>

          <InfoRow>
            <div>
              <Calendar size={16} />
              موعد التسليم: {mission.dueDate}
            </div>
            <div>
              <Clock size={16} />
              تم الإنشاء: {mission.createdAt}
            </div>
            <div>
              <Users size={16} />
              {mission.totalStudents} طالب
            </div>
            <div>
              <Level status={mission.level}>المستوي: {mission.level}</Level>
            </div>
            <div>
              <Points>{mission.points} نقطة</Points>
            </div>
          </InfoRow>

          <Actions>
            <ActionBtn>
              <Eye size={16} /> عرض
            </ActionBtn>
            <ActionBtn>
              <Edit size={16} /> تعديل
            </ActionBtn>
            <ActionBtn>
              <Trash2 size={16} /> حذف
            </ActionBtn>
          </Actions>
          <hr color="hsl(var(--muted-foreground))" />

          <SubmittingNumber>
            <Count>
              <span>تقدم التسليم</span>
              <span>
                {mission.submittedStudents}/{mission.totalStudents} طالب سلم
              </span>
            </Count>
            <div className="flex flex-col gap-6 w-full mb-3 mt-2 progres rounded-3">
              <Progress
                aria-label="Attendance"
                value={
                  (mission.submittedStudents / mission.totalStudents) * 100
                }
              />
            </div>
            <Finsh>
              <span>تم تصحيح: {mission.corrected} مهمة</span>
              <span>في انتظار التصحيح: {mission.waiting} مهمة</span>
            </Finsh>
          </SubmittingNumber>
        </SessionBox>
      ))}
    </Wrapper>
  );
}
