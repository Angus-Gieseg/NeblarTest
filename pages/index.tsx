import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import {
  TextInput,
  Text,
  Paper,
  Container,
  NativeSelect,
  Checkbox,
  Button,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { Patient } from "./api/patient/[id]";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name should not be empty")
    .min(2, "Name should have at least 2 letters"),
  gender: Yup.string()
    .required("Name should not be empty")
    .min(4, `Gender should be 'male' or 'female'`),
  birthdate: Yup.date().required("Birthdate should not be empty"),
});

export default function Home() {
  const [saveState, setSaveState] = useState("");

  const { isLoading, error, data } = useQuery<Patient, any>({
    queryKey: ["patientData"],
    queryFn: () => axios.get("/api/patient/123").then((res) => res.data),
  });

  const form = useForm({ validate: yupResolver(schema) });

  useEffect(() => {
    if (data) {
      form.setValues({
        name: data.name[0].text,
        gender: data.gender,
        birthdate: new Date(Date.parse(data.birthDate)),
        active: data.active,
      });
    }
  }, [form, data]);

  if (error) return "An error has occurred: " + error.message;

  const updatePatient = (formData: object) => {
    console.log(formData);

    setSaveState("saving");

    axios
      .post("/api/patient/123", { data: formData })
      .then(() => setSaveState("saved"));
  };

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={500} mb={4}>
          Patient form{" "}
          {isLoading
            ? " - loading..."
            : saveState === "saving"
            ? " - saving..."
            : saveState === "saved"
            ? " - saved."
            : ""}
        </Text>

        <form onSubmit={form.onSubmit(updatePatient)}>
          <TextInput label="Name" {...form.getInputProps("name")} />
          <NativeSelect
            data={["", "male", "female"]}
            label="Gender"
            {...form.getInputProps("gender")}
          />
          <DatePicker label="Birthdate" {...form.getInputProps("birthdate")} />
          <Checkbox
            label="Active"
            {...form.getInputProps("active", { type: "checkbox" })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </Container>
  );
}
