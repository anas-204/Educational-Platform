import Sidebar from "../../src/components/comon/DashBoard/SideBar";
import NavBar from "../../src/components/comon/DashBoard/NavBar";
import styled from "styled-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = styled.div`
  // height: inherit;
`;
const Content = styled.div`
  direction: rtl;
  display: flex;
  background-color: hsl(var(--background));
  min-height: 100vh;
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
  padding-top: 10px;
  margin-top: 85px;
  min-height: 100vh;
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
