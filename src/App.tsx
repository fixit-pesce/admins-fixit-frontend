import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import UsersPage from "./pages/UsersPage"
import ServiceProvidersPage from "./pages/ServiceProvidersPage"
import DashboardPage from "./pages/DashboardPage"
import ServicesPage from "./pages/ServicesPage"

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/service-providers" element={<ServiceProvidersPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Box>
  )
}
