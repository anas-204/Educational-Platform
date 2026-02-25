import styled from "styled-components";
import {
  Calendar,
  Clock,
  Users,
  Eye,
  Edit,
  Trash2,
  FileText,
  BookOpen,
  Circle,
  Activity,
  Award,
  Settings,
} from "lucide-react";
import { Progress, Pagination, Spinner } from "@heroui/react";
import apiRequest from "../../../../utils/apiRequest";
import { formatDateToYMD, timeFromDate } from "../../../../utils/format";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

// Styled components (only those used)
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

const Title = styled.h3`
  font-weight: 600 !important;
  margin-bottom: 1rem;
  text-align: right;
  letter-spacing: -0.025em;
  font-size: 1.5rem !important;
  color: hsl(var(--foreground));
`;

const TableWrapper = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background-color: hsl(var(--background));
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  padding: 0.5rem;
`;

const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) =>
    status === "نشط" ? "#7c3aed" : status === "مكتمل" ? "#0ea5e9" : "#6b7280"};
  display: inline-block;
`;

const LevelBadge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ level }) =>
    level === "صعب"
      ? "hsl(var(--warning))"
      : level === "متوسط"
        ? "hsl(var(--destructive))"
        : "#10b981"}; // easy: green
  display: inline-block;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.5rem;
  background: hsl(var(--background));
  cursor: pointer;
  transition: all 0.2s;
  color: hsl(var(--foreground));

  &:hover {
    background: hsl(var(--primary-dark));
    color: hsl(var(--background));
  }
`;

export default function ActiveMission() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [missionsCount, setMissionsCount] = useState(0);
  const rowsPerPage = 10; // adjust based on API page size

  useEffect(() => {
    fetchMissions();
  }, [page]);

  const fetchMissions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("page", String(page));
      const queryString = params.toString() ? `?${params.toString()}` : "";

      const res = await apiRequest({
        service: "TEACHER_QUIZZES",
        filter: queryString,
      });

      console.log("Missions API response:", res);

      let missionsArray = [];
      let totalCount = 0;

      if (res.data && Array.isArray(res.data)) {
        missionsArray = res.data;
        totalCount = res.total || 0;
      } else if (res.results && Array.isArray(res.results)) {
        missionsArray = res.results;
        totalCount = res.count || 0;
      } else if (Array.isArray(res)) {
        missionsArray = res;
        totalCount = res.length; // fallback – pagination won't work
      } else {
        missionsArray = res || [];
        totalCount = missionsArray.length;
      }

      setMissions(missionsArray);
      setMissionsCount(totalCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(missionsCount / rowsPerPage);

  const columns = [
    { key: "title", label: "المهمة", icon: FileText },
    { key: "subject", label: "المادة", icon: BookOpen },
    { key: "status", label: "الحالة", icon: Circle },
    { key: "dueDate", label: "تاريخ التسليم", icon: Calendar },
    { key: "level", label: "المستوى", icon: Activity },
    { key: "points", label: "النقاط", icon: Award },
    { key: "students", label: "الطلاب", icon: Users },
    { key: "actions", label: "الإجراءات", icon: Settings },
  ];

  // Prepare items for table – format dates if needed
  const items = missions.map((mission) => ({
    ...mission,
    // If mission.dueDate is a date string, keep as is; otherwise format if it's a datetime
    dueDate: mission.dueDate
      ? mission.dueDate
      : formatDateToYMD(mission.createdAt), // fallback
    students: `${mission.submittedStudents || 0}/${mission.totalStudents || 0}`,
  }));

  if (loading && missions.length === 0) {
    return (
      <Card>
        <Title>المهام النشطة</Title>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <CircularProgress />
        </div>
      </Card>
    );
  }

  return (
    <div dir="rtl">
      <TableWrapper>
        <Table
          aria-label="قائمة المهام النشطة"
          bottomContent={
            totalPages > 1 ? (
              <div
                className="flex w-full justify-center"
                style={{ marginTop: "20px" }}
              >
                <Pagination
                  showShadow
                  color="primary"
                  page={page}
                  total={totalPages}
                  onChange={(newPage) => setPage(newPage)}
                />
              </div>
            ) : null
          }
          style={{ minWidth: "100%", borderCollapse: "collapse" }}
        >
          <TableHeader columns={columns}>
            {(column) => {
              const Icon = column.icon;
              return (
                <TableColumn
                  key={column.key}
                  align="center"
                  style={{
                    fontSize: "0.75rem",
                    color: "hsl(var(--muted-foreground))",
                    fontFamily: "Cairo, sans-serif",
                    borderBottom: "1px solid hsl(var(--border))",
                    padding: "12px 8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <Icon size={16} />
                    {column.label}
                  </div>
                </TableColumn>
              );
            }}
          </TableHeader>
          <TableBody
            items={items}
            loadingContent={<Spinner />}
            loadingState={loading ? "loading" : "idle"}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => {
                  const cellStyle = {
                    fontSize: "0.75rem",
                    fontFamily: "Cairo, sans-serif",
                    borderBottom: "1px solid hsl(var(--border))",
                    padding: "12px 8px",
                  };
                  switch (columnKey) {
                    case "title":
                      return (
                        <TableCell style={cellStyle}>
                          <div style={{ fontWeight: 500 }}>{item.title}</div>
                        </TableCell>
                      );
                    case "subject":
                      return (
                        <TableCell style={cellStyle}>{item.subject}</TableCell>
                      );
                    case "status":
                      return (
                        <TableCell style={cellStyle}>
                          <Badge status={item.status}>{item.status}</Badge>
                        </TableCell>
                      );
                    case "dueDate":
                      return (
                        <TableCell style={cellStyle}>{item.dueDate}</TableCell>
                      );
                    case "level":
                      return (
                        <TableCell style={cellStyle}>
                          <LevelBadge level={item.level}>
                            {item.level}
                          </LevelBadge>
                        </TableCell>
                      );
                    case "points":
                      return (
                        <TableCell style={cellStyle}>{item.points}</TableCell>
                      );
                    case "students":
                      return (
                        <TableCell style={cellStyle}>{item.students}</TableCell>
                      );
                    case "actions":
                      return (
                        <TableCell style={cellStyle}>
                          <ActionsContainer>
                            <ActionBtn>
                              <Eye size={16} />
                            </ActionBtn>
                            <ActionBtn>
                              <Edit size={16} />
                            </ActionBtn>
                            <ActionBtn>
                              <Trash2 size={16} />
                            </ActionBtn>
                          </ActionsContainer>
                        </TableCell>
                      );
                    default:
                      return null;
                  }
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
