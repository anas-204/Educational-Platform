import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Edit,
  Trash2,
  FileText, // for title
  AlignLeft, // for description
  Hash, // for id
  Settings, // for actions
} from "lucide-react";
import apiRequest from "../../../../utils/apiRequest";
import { formatDateToYMD, timeFromDate } from "../../../../utils/format";
import { Pagination, Spinner } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { CircularProgress } from "@mui/material";

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sessionsCount, setSessionsCount] = useState(0);
  const rowsPerPage = 10; // adjust based on API page size

  useEffect(() => {
    fetchSessions();
  }, [page]);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      // Build query string with page parameter
      const params = new URLSearchParams();
      params.append("page", String(page));
      const queryString = params.toString() ? `?${params.toString()}` : "";

      const res = await apiRequest({
        service: "TEACHER_SESSIONS",
        filter: queryString,
      });

      console.log("Sessions API response:", res);

      // Extract sessions array and total count based on response shape
      let sessionsArray = [];
      let totalCount = 0;

      if (res.data && Array.isArray(res.data)) {
        sessionsArray = res.data;
        totalCount = res.total || 0;
      } else if (res.results && Array.isArray(res.results)) {
        sessionsArray = res.results;
        totalCount = res.count || 0;
      } else if (Array.isArray(res)) {
        sessionsArray = res;
        totalCount = res.length; // fallback – pagination won't work
      } else {
        sessionsArray = res || [];
        totalCount = sessionsArray.length;
      }

      setSessions(sessionsArray);
      setSessionsCount(totalCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(sessionsCount / rowsPerPage);

  const columns = [
    { key: "title", label: "الموضوع", icon: FileText },
    { key: "description", label: "الوصف", icon: AlignLeft },
    { key: "datetime", label: "التاريخ والوقت", icon: Calendar },
    { key: "center", label: "المركز", icon: MapPin },
    { key: "id", label: "الكود", icon: Hash },
    { key: "actions", label: "الإجراءات", icon: Settings },
  ];

  const items = sessions.map((session) => ({
    ...session,
    datetime: `${formatDateToYMD(session.session_datetime)} ${timeFromDate(session.session_datetime)}`,
    center: session.centers?.name || "",
  }));

  if (loading && sessions.length === 0) {
    return (
      <Card>
        <Header>الجلسات القادمة</Header>
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
          aria-label="قائمة الجلسات القادمة"
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
                    fontSize: "0.85rem",
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
                    fontSize: "0.85rem",
                    fontFamily: "Cairo, sans-serif",
                    borderBottom: "1px solid hsl(var(--border))",
                    padding: "12px 8px",
                  };
                  switch (columnKey) {
                    case "title":
                      return (
                        <TableCell style={cellStyle}>{item.title}</TableCell>
                      );
                    case "description":
                      return (
                        <TableCell style={cellStyle}>
                          <Badge status={item.status}>{item.description}</Badge>
                        </TableCell>
                      );
                    case "datetime":
                      return (
                        <TableCell style={cellStyle}>{item.datetime}</TableCell>
                      );
                    case "center":
                      return (
                        <TableCell style={cellStyle}>{item.center}</TableCell>
                      );
                    case "id":
                      return <TableCell style={cellStyle}>{item.id}</TableCell>;
                    case "actions":
                      return (
                        <TableCell style={cellStyle}>
                          <ActionsContainer>
                            <ActionBtn
                              style={{
                                backgroundColor: "hsl(var(--primary))",
                                color: "#fff",
                              }}
                            >
                              <Edit size={16} />
                            </ActionBtn>
                            <ActionBtn
                              style={{
                                backgroundColor: "hsl(var(--destructive))",
                                color: "#fff",
                              }}
                            >
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

// Styled components

const TableWrapper = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background-color: hsl(var(--background));
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  padding: 0.5rem;
`;

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
    color: hsl(
      var(--foimport Description from "./../../../home/Description" ; reground)
    );
  }
`;

const Badge = styled.span`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background-color: #0ea5e9;
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
