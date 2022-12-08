import { useForm } from "@mantine/form";
import { TextInput, Text, Paper, Divider, Container } from "@mantine/core";

export default function Home() {
  const form = useForm({
    initialValues: { name: "" },
  });

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={500} mb={4}>
          Patient form
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <TextInput label="Name" {...form.getInputProps("name")} />
        </form>
      </Paper>
    </Container>
  );
}
