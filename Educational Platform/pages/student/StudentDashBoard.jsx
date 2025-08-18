import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../src/components/DashBoard/SideBar";
import NavBar from "../../src/components/DashBoard/NavBar";
import styled from "styled-components";
import { useState } from "react";
const Main = styled.div`
  display: grid;
  height: 100vh;
  overflow-x: hidden;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: calc(100vh - 88.8px);
  direction: rtl;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
          <main>
            <Outlet />
          </main>
        </Content>
      </Main>
    </>
  );
}
