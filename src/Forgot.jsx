import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  Flex,
  Field,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function Forgot() {
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
            Forgot Password
          </Heading>

          <Field.Root id="email" required>
            <Field.Label>
              Email address <Field.RequiredIndicator />
            </Field.Label>
            <Input type="email" placeholder="you@example.com" />
            <Field.ErrorText>Email address required</Field.ErrorText>
          </Field.Root>

          <Button
            color="teal"
            size="md"
            w="full"
            onClick={() => {
              navigate("/recoverPassword");
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
