import HomeWorkCard from "../../src/components/cards/student/HomeWorkCard";
import "../../styles/homeWork.css";
import { useEffect, useState } from "react";
import "../../src/assets/homework.png";
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
      <div className="homeWorkContainer" style={{ height: "100vh" }}>
        <div className="header mb-4 pt-4 ps-4">
          <h3 style={{ fontWeight: "bold", color: "hsl(var(--foreground))" }}>
            الواجبات المنزلية
          </h3>
          <p>عرض جميع الواجبات وحالة التسليم</p>
        </div>
        <div className="body ps-4">
          {homeWorks.length ? (
            homeWorks.map((homework) => (
              <HomeWorkCard
                key={homework.id}
                title={homework.homeworks.title}
                subject="رياضيات"
                description={homework.homeworks.description}
                status={homework.status ? homework.status : "مكتمل"}
                requiredDate={new Date(
                  homework.homeworks.start_date
                ).toLocaleDateString("ar-EG")}
                submitDate={new Date(
                  homework.submission_date
                ).toLocaleDateString("ar-EG")}
                endDate={new Date(
                  homework.homeworks.due_date
                ).toLocaleDateString("ar-EG")}
                id={homework.id}
              />
            ))
          ) : (
            <div className="">
              <img
                src="../../src/assets/homework.png"
                alt="homework "
                style={{
                  width: "200px",
                  marginInline: "auto",
                  marginBlock: "20px",
                }}
              />
              <p
                className="mx-auto my-auto"
                style={{
                  color: "hsl(var(--foreground)) !important",
                  width: "fit-content",
                }}
              >
                لا توجد واجبات ليتم تسليمها حتي الآن
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
