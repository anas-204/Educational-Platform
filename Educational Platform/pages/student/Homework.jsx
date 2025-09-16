import HomeWorkCard from "../../src/components/cards/student/HomeWorkCard";
import "../../styles/homeWork.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Homework() {
  const [homeWorks, setHomeWorks] = useState([]);

  useEffect(() => {
    getHomeWork();
  }, []);

  const getHomeWork = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        "http://localhost:3000/student/homeworks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHomeWorks(response.data);
    } catch (error) {
      console.error("Error fetching homework:", error);
    }
  };
  return (
    <>
      <div className="homeWorkContainer">
        <div className="header mb-4">
          <h3 style={{ fontWeight: "bold" }}>الواجبات المنزلية</h3>
          <p>عرض جميع الواجبات وحالة التسليم</p>
        </div>
        <div className="body">
          {homeWorks.map((homework) => (
            <HomeWorkCard
              key={homework.id}
              title={homework.homeworks.title}
              subject="رياضيات"
              description={homework.homeworks.description}
              status={homework.status ? homework.status : "مكتمل"}
              requiredDate={new Date(
                homework.homeworks.start_date
              ).toLocaleDateString("ar-EG")}
              submitDate={new Date(homework.submission_date).toLocaleDateString(
                "ar-EG"
              )}
              endDate={new Date(homework.homeworks.due_date).toLocaleDateString(
                "ar-EG"
              )}
              id={homework.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
