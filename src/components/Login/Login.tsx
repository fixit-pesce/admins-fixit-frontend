import { useState } from "react"
import {
  Card,
  Center,
  Icon,
  Heading,
  Divider,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Link,
} from "@chakra-ui/react"
import { MdHandyman } from "react-icons/md"
import { NavLink, useNavigate } from "react-router-dom"
import { PasswordField } from "./PasswordField"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {}

  return (
    <Card maxW="md" p={8} bg="foreground" boxShadow="lg" m={4}>
      <Stack spacing={4}>
        <Center>
          <Icon as={MdHandyman} h="32px" w="32px" />
          <Heading
            pl="12px"
            fontSize="28px"
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            Fixit - Admin Panel
          </Heading>
        </Center>
        <Heading textAlign="center">Login to your account</Heading>
        <Divider orientation="horizontal" borderColor="black" />
        <form>
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" placeholder="Enter your username" required />
            </FormControl>
            <PasswordField placeholder="Enter your password" />
            <Button
              bg="primary.400"
              color="white"
              _hover={{ bg: "primary.500" }}
              type="submit"
              onClick={(e) => handleSubmit(e)}
              isLoading={isLoading}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  )
}
