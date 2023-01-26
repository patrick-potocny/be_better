import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Typing from "../components/Typing";
import "@testing-library/jest-dom";

describe("Typing component", () => {
  it("should render the typing animation", async () => {
    render(<Typing />);
    const typingElement = screen.getByText("Typing");
    expect(typingElement).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Typing.")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Typing..")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Typing...")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Typing")).toBeInTheDocument();
    });
  });
});
