import { Box } from "@chakra-ui/react"

export default function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bg="secondary.400"
      minW="240px"
      minH="100vh"
      boxShadow="xl"
      textAlign="center"
    >
      {children}
    </Box>
  )
}
