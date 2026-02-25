import styled from "styled-components";
import apiRequest from "../../../../utils/apiRequest";
import { useState, useEffect } from "react";
import { Pagination, Spinner } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Typography, CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { User, Hash, Layers, MapPin, Phone, Mail } from "lucide-react"; // Added icons

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  const nameParts = name.split(" ");
  let initials = "";
  if (nameParts.length >= 2) {
    initials = `${nameParts[0][0]}${nameParts[1][0]}`;
  } else if (nameParts.length === 1) {
    initials = nameParts[0][0];
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

export default function ListOfStudents({ search }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [studentsCount, setStudentsCount] = useState(0);
  const rowsPerPage = 10; // Adjust based on your API page size

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [search, page]);

  const fetchStudents = async () => {
    let string = search ? `?&name=${search}` : "?";
    string += `&page=${page}`;
    setLoading(true);

    try {
      const res = await apiRequest({
        service: "TEACHER_STUDENTS",
        filter: string,
      });
      setStudents(res.data || res);
      console.log(res);
      setStudentsCount(res.length || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(studentsCount / rowsPerPage);

  // Add icons to columns
  const columns = [
    { key: "name", label: "الطالب", icon: User },
    { key: "id", label: "الكود", icon: Hash },
    { key: "section", label: "المرحلة", icon: Layers },
    { key: "centerName", label: "المركز", icon: MapPin },
    { key: "phone", label: "رقم الهاتف", icon: Phone },
    { key: "email", label: "البريد", icon: Mail },
  ];

  const items = students.map((student) => ({
    ...student,
    centerName: student.centers?.name || "",
  }));

  if (loading && students.length === 0) {
    return (
      <Card>
        <Header>قائمة الطلاب</Header>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <CircularProgress />
        </div>
      </Card>
    );
  }

  return (
    <div dir="rtl">
      <TableWrapper>
        <Header>قائمة الطلاب</Header>

        <Table
          aria-label="قائمة الطلاب"
          bottomContent={
            totalPages > 1 ? (
              <div
                className="flex w-full justify-center"
                style={{ marginTop: "20px" }}
              >
                <Pagination
                  showControls
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
                  align={column.key === "name" ? "right" : "center"}
                  className={
                    column.key === "name" ? "text-right" : "text-center"
                  }
                  style={{
                    fontSize: "0.85rem",
                    color: "hsl(var(--muted-foreground))",
                    fontFamily: "Cairo, sans-serif",
                    borderBottom: "1px solid hsl(var(--border))",
                    padding: "12px 8px",
                    fontWeight: "bold",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        column.key === "name" ? "flex-start" : "center",
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
                    case "name":
                      return (
                        <TableCell style={cellStyle}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                            }}
                          >
                            <Avatar
                              {...stringAvatar(item.name)}
                              sx={{
                                width: 32,
                                height: 32,
                                fontSize: "0.875rem",
                              }}
                            />
                            <Typography
                              style={{
                                color: "hsl(var(--foreground))",
                                fontFamily: "Cairo, sans-serif",
                                fontSize: "0.85rem",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </div>
                        </TableCell>
                      );
                    case "centerName":
                      return (
                        <TableCell style={cellStyle}>
                          {item.centerName}
                        </TableCell>
                      );
                    default:
                      return (
                        <TableCell style={cellStyle}>
                          {item[columnKey]}
                        </TableCell>
                      );
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

const TableWrapper = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background-color: hsl(var(--background));
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  padding: 0.5rem;
  font-weight: bold;
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
  padding: 0.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  h3 {
    letter-spacing: -0.025em;
    line-height: 1;
    font-weight: 600 !important;
    font-size: 2rem !important;
    color: hsl(var(--foreground));
  }
`;
