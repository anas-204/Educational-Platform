import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Description } from "@mui/icons-material";

const Wrapper = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 1rem;
  padding: 1rem;
  background: hsl(var(--background));
  --tw-shadow: var(--shadow-medium);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  background-color: hsl(var(--card-gradient));
`;

const Title = styled.h3`
  font-weight: 600 !important;
  margin-bottom: 1rem;
  text-align: right;
  letter-spacing: -0.025em;
  font-size: 1.5rem !important;
  color: hsl(var(--foreground));
`;

const SessionBox = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: hsl(var(--card));
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    font-weight: 600 !important;
    color: hsl(
      var(--fimport Description from "./../../../home/Description" ; oreground)
    );
  }
`;

const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) =>
    status === "مجدولة"
      ? "#7c3aed"
      : status === "مؤكدة"
        ? "#0ea5e9"
        : "#6b7280"};
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
    svg {
      color: hsl(var(--primary-dark));
      margin-left: 5px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 1rem;
  font-size: 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.5rem;
  background: hsl(vare(--background));
  cursor: pointer;
  transition: all 0.2s;
  color: hsl(var(--foreground));

  &:hover {
    background: hsl(var(--primary-dark));
    color: hsl(var(--background));
  }
`;

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to split ISO date and format time in Arabic
  const splitDateTime = (isoDateString) => {
    if (!isoDateString) return { date: "", time: "" };

    // Split at 'T' to separate date and time
    const [datePart, timePart] = isoDateString.split("T");

    if (!datePart || !timePart) {
      return { date: "", time: "" };
    }

    // Date is already in YYYY-MM-DD format
    const date = datePart;

    // Extract hours and minutes from time part (before the seconds)
    const timeComponents = timePart.split(":");
    if (timeComponents.length < 2) {
      return { date, time: "" };
    }

    let hours = parseInt(timeComponents[0]);
    const minutes = timeComponents[1];

    // Convert to 12-hour Arabic format
    const ampm = hours >= 12 ? "م" : "ص";
    hours = hours % 12;
    hours = hours || 12; // Convert 0 to 12

    // Format time as "ساعة:دقيقة ص/م"
    const time = `${hours}:${minutes} ${ampm}`;

    return { date, time };
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:3000/teacher/session", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if (data && data.length > 0) {
          const transformedSessions = data.map((session) => {
            const dateField = session.session_datetime;
            console.log(dateField);

            const { date, time } = splitDateTime(dateField);

            return {
              id: session.id || session._id || Math.random(),
              title: session.title || "بدون عنوان",
              description: session.description || "لا يوجد وصف متاح",
              date: date,
              time: time,
              students: `${session.students || 0} طالب`,
              location: session.centers?.name || "غير محدد",
            };
          });
          console.log(transformedSessions);

          setSessions(transformedSessions);
        } else {
          setSessions(getDummyData());
        }
      } else {
        setSessions(getDummyData());
      }
    } catch (error) {
      console.error("Error fetching sessions:", error);
      setSessions(getDummyData());
    } finally {
      setLoading(false);
    }
  };

  const getDummyData = () => [
    {
      id: 1,
      title: "الرياضيات - المعادلات التفاضلية",
      status: "مجدولة",
      date: "2025-01-20",
      time: "10:00 ص",
      duration: "60 دقيقة",
      students: "12/15 طالب",
      location: "قاعة A-101",
    },
    {
      id: 2,
      title: "الفيزياء - قوانين نيوتن",
      status: "مؤكدة",
      date: "2025-01-21",
      time: "2:00 م",
      duration: "90 دقيقة",
      students: "8/10 طالب",
      location: "معمل الفيزياء",
    },
  ];

  if (loading) {
    return (
      <Wrapper>
        <Title>الجلسات القادمة</Title>
        <div style={{ textAlign: "center", padding: "20px" }}>
          جاري تحميل الجلسات...
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>الجلسات القادمة</Title>

      {sessions.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          لا توجد جلسات قادمة
        </div>
      ) : (
        sessions.map((session) => (
          <SessionBox key={session.id}>
            <Header>
              <h3>{session.title}</h3>
              <Badge status={session.status}>{session.description}</Badge>
            </Header>

            <InfoRow>
              <div>
                <Calendar size={16} />
                {session.date}
              </div>
              <div>
                <Clock size={16} />
                {session.time}
              </div>
              <div>
                <Users size={16} />
                {session.students}
              </div>
              <div>
                <MapPin size={16} />
                {session.location}
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
                <Trash2 size={16} /> أبعد
              </ActionBtn>
            </Actions>
          </SessionBox>
        ))
      )}
    </Wrapper>
  );
}
