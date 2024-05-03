import { Box, Button, Link, List } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/users" },
  { name: "Service Providers", path: "/service-providers" },
  { name: "Services", path: "/services" },
]

export default function Drawer() {
  return (
    <Box
      bg="secondary.400"
      minW="240px"
      minH="100vh"
      boxShadow="xl"
      textAlign="center"
    >
      <List display="flex" flexDirection="column">
        {links.map((link) => (
          <Link
            as={NavLink}
            py="2"
            to={link.path}
            _activeLink={{ fontWeight: "bold", bg: "secondary.500" }}
          >
            {link.name}
          </Link>
        ))}
      </List>
      <Button colorScheme="blue" mt="2">
        Logout
      </Button>
    </Box>
  )
}
