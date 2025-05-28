import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  Flex,
  Field,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={8}
        rounded="xl"
        boxShadow="lg"
        w={{ base: "90%", md: "400px" }}
      >
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center" color="teal.600">
            Welcome
          </Heading>

          <Field.Root id="email" required>
            <Field.Label>
              Email address <Field.RequiredIndicator />
            </Field.Label>
            <Input type="email" placeholder="you@example.com" />
            <Field.ErrorText>Email address required</Field.ErrorText>
          </Field.Root>

          <Field.Root id="password" required>
            <Field.Label>
              Password <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="Enter your password" />
            <Field.ErrorText>Password Required</Field.ErrorText>
          </Field.Root>

          <Flex justify="flex-end">
            <Link to="/forgot">Forgot password?</Link>
          </Flex>

          <Button color="teal" size="md" w="full">
            Login
          </Button>
          <Button
            color="Green"
            size="md"
            w="full"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create Account
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Login;
