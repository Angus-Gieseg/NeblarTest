import Home from "../pages/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { screen, render, waitFor } from '@testing-library/react'
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


const queryClient = new QueryClient();
const mockFormData = {
  name: "Jack",
  gender: "male",
  birthdate: "Sun Mar 13 1960 12:00:00 GMT+1200 (New Zealand Daylight Time)",
  active: true,
}

// beforeEach(() => {
//   jest.resetAllMocks()
// })

// jest.mock('react-router-dom')

// jest.mock("../pages/api/[id]")


describe("Home", () => {

  const renderComponent = () => ( render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  ))

  it("Check roles are in the page", async () => {
    expect.assertions(3)
    const { getByText, getAllByRole } = renderComponent();
    mockedAxios.get.mockResolvedValue(mockFormData)
    await waitFor(() => {
      const checkbox = screen.getAllByRole('checkbox');
      const textbox = screen.getAllByRole('textbox');
      const button = screen.getAllByRole('button');
      const SubmitButton = screen.getAllByRole('button', { name: 'Submit' })
      expect(checkbox).toBeTruthy()
      expect(textbox).toHaveLength(2)
      expect(button).toHaveLength(1)
    })
  })
  it.skip("Displays patients details on the form", async () => {
    //
    expect.assertions(3)
    mockedAxios.get.mockResolvedValue(mockFormData)

    await waitFor(() => {
      const patientName = screen.getByDisplayValue(mockFormData.name)
      const Patientgender = screen.getByDisplayValue(mockFormData.gender)
      expect(patientName).toBeInTheDocument()

    })
  })
})

