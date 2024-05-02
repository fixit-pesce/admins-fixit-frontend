import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import UsersPage from "./pages/UsersPage"
import HomePage from "./pages/HomePage"
import ServiceProvidersPage from "./pages/ServiceProvidersPage"

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/service-providers" element={<ServiceProvidersPage />} />
        <Route path="/test" element={<HomePage />} />
      </Routes>
    </Box>
  )
}
