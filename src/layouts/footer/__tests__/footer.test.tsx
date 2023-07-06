import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderIntoDocument } from "react-dom/test-utils";

import user from "@testing-library/user-event";
import Footer from "../footer";
import { Modal } from "../../../components";

describe("Footer component", () => {
  test("renders the setting and create new item buttons", () => {
    render(<Footer />);

    const settingsButton = screen.getByRole("button-settings");
    expect(settingsButton).toBeInTheDocument();

    const createNewItemButton = screen.getByRole("button-new-item");
    expect(createNewItemButton).toBeInTheDocument();
  });

  // test if clicking "settings button" opens the modal
  // test("clicking the settings button opens the dedicated modal", async () => {
  // user.setup();
  // // render(<Footer />);
  // const myPortal = renderIntoDocument(
  //   <Modal variant="information"> {"Modal content"} </Modal>
  // );
  // const settingsButton = screen.getByRole("button-settings");

  //hook1 - \/ this throws an error. because "modal" isnt a DOM element (sice portals add this modal outside the DOm hierarchy), as it says
  // await user.click(settingsButton);

  // const settingsModal = screen.getByRole("aside");
  // expect(settingsModal).toBeInTheDocument();
  // });
});
