import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "../footer";

describe("Footer component", () => {
  test("renders the setting and create new item buttons", () => {
    render(<Footer />);

    const settingsButton = screen.getByRole("button-settings");
    expect(settingsButton).toBeInTheDocument();

    const createNewItemButton = screen.getByRole("button-new-item");
    expect(createNewItemButton).toBeInTheDocument();
  });
});
