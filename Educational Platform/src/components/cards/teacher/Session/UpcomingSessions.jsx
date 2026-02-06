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
import apiRequest from "../../../../utils/apiRequest";
import Cookies from "js-cookie";
import {formatDateToYMD, timeFromDate} from "../../../../utils/format";
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

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      await apiRequest({
        service: "TEACHER_SESSIONS",
      }).then((res) => {
        setSessions(res);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
                {formatDateToYMD(session.session_datetime)}
              </div>
              <div>
                <Clock size={16} />
                {timeFromDate(session.session_datetime)}
              </div>
              <div>
                <Users size={16} />
                {session._count.attendances}
              </div>
              <div>
                <MapPin size={16} />
                {session.centers.name}
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
