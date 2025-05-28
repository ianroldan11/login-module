import {
  Box,
  Button,
  Input,
  Stack,
  Field,
  Heading,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={8}
        rounded="xl"
        boxShadow="lg"
        w={{ base: "90%", md: "500px" }}
      >
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center" color="teal.600">
            Create Your Account
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Field.Root id="firstName" required>
              <Field.Label>
                First Name <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="Juan" />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>

            <Field.Root id="lastName" required>
              <Field.Label>
                Last Name <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="Dela Cruz" />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>
          </SimpleGrid>

          <Field.Root id="email" required>
            <Field.Label>
              Email address <Field.RequiredIndicator />
            </Field.Label>
            <Input type="email" placeholder="you@example.com" />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>

          <Field.Root id="password" required>
            <Field.Label>
              Password <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="Create a strong password" />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>

          <Field.Root id="confirmPassword" required>
            <Field.Label>
              Confirm Password <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="***********" />
            <Field.ErrorText>Passwords do not match</Field.ErrorText>
          </Field.Root>

          <Button color="teal" size="md" w="full" mt={2}>
            Register
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
