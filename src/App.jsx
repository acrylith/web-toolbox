import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar handleToggle={handleDrawerToggle} />
      <SideNav isOpen={mobileOpen} handleToggle={handleDrawerToggle} />
      <Box sx={{ pt: '64px', width: '100%', md:{ width: `calc(100% - 240px)` } }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default App;
