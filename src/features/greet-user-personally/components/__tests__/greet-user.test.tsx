import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { GreetUser } from "../..";

describe("Greet User component", () => {
  test("renders the component with initial state", () => {
    render(<GreetUser user="Blendear" />);

    const greetingContainer = screen.getByRole("heading");
    expect(greetingContainer).toBeInTheDocument();
  });

  test("renders a greeting", () => {
    render(<GreetUser user="Blendear" />);
    // hook2 - make a mock of the user,  so that i also test if the correct name is displayed alongisde "Hey..."
    const greetingText = screen.getByRole("heading", {
      name: /Hey/i,
    });
    expect(greetingText).toBeInTheDocument();
  });
});

// main
