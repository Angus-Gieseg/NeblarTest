import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const heading = screen.getByText(/Patient form/i);

    expect(heading).toBeInTheDocument();
  });
});
