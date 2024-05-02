import { Box, Link, List, ListItem } from "@chakra-ui/react"
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
      <List>
        {links.map((link) => (
          <ListItem key={link.name}>
            <Link as={NavLink} to={link.path}>
              {link.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
