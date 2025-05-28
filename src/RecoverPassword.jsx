import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  Flex,
  Field,
} from "@chakra-ui/react";

export default function RecoverPassword() {
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
            Recover Password
          </Heading>

          <Field.Root id="password" required>
            <Field.Label>
              Password <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="Enter your password" />
            <Field.ErrorText>Password Required</Field.ErrorText>
          </Field.Root>

          <Field.Root id="confirmPassword" required>
            <Field.Label>
              Confirm Password <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="***********" />
            <Field.ErrorText>Passwords do not match</Field.ErrorText>
          </Field.Root>

          <Button color="teal" size="md" w="full">
            Submit
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
