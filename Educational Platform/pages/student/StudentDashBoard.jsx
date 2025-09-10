import Sidebar from "../../src/components/comon/DashBoard/SideBar";
import NavBar from "../../src/components/comon/DashBoard/NavBar";
import styled from "styled-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
const Content = styled.div`
  direction: rtl;
  display: flex;
  padding-bottom: 20px;
  @media (min-width: 769px) {
    & > div:first-child {
      flex: 0 0 15%;
    }
    & > div:last-child {
      flex: 0 0 85%;
    }
  }

  @media (max-width: 768px) {
    & > div:first-child {
      flex: 0 0 0;
      display: none;
    }
    & > div:last-child {
      flex: 1 1 100%;
    }
  }
`;
const Out = styled.div`
  padding: 1.5rem;
  margin-top: 85px;
`;

export default function StudentDashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <Main>
        <NavBar toggleSidebar={toggleSidebar} />
        <Content>
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
          <Out>
            <Outlet />
          </Out>
        </Content>
      </Main>
    </>
  );
}
