import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ListOfItemsToBuy from "../ListOfItems";

describe("List of items component", () => {
  test("renders the component with initial state", () => {
    render(<ListOfItemsToBuy itemsFromDB={[{}]} />);
    const listOfItemsContainer = screen.getByRole("list");
    expect(listOfItemsContainer).toBeInTheDocument();
  });

  test("renders a placeholder list of items", () => {
    render(
      <ListOfItemsToBuy
        itemsFromDB={[
          {
            colorOfCurrentAmount: "bg-color--success",
            numberOfMeasurement: "1",
            isOpen: "",
            unitOfMeasurement: "pc.",
            expirationDateTime: "22:58",
            itemName: "Banana",
            imageURL:
              "https://img.freepik.com/premium-vector/cute-banana-cartoon-vector-icon-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-187.jpg?w=2000",
            repeatability: "Traditional",
            amountMaxExpected: "3",
            expirationDateDay: "2023-06-30",
            amountCurrent: "3",
          },
          {
            isOpen: "",
            unitOfMeasurement: "kg",
            expirationDateTime: "19:42",
            numberOfMeasurement: "1",
            amountCurrent: "0",
            amountMaxExpected: "1",
            expirationDateDay: "",
            repeatability: "Traditional",
            colorOfCurrentAmount: "bg-color--danger",
            imageURL:
              "https://media.istockphoto.com/id/598798954/sv/vektor/cute-broccoli-vegetable-mascot-vector.jpg?s=612x612&w=0&k=20&c=_JoG5gouOTP4usmzb7oJxwkgRB_CurYGDL_F5_vvnIk=",
            itemName: "Broccoli",
          },
        ]}
      />
    );
    const testItem1 = screen.getByText("Banana");
    expect(testItem1).toBeInTheDocument();

    const testItem2 = screen.getByText("Broccoli");
    expect(testItem2).toBeInTheDocument();
  });

  //hook1 - how to write a test for ListOfItems with ACTUAL DATA FROM DATABASE, if the test needs to wait for the data to load?
  //       - i need to mock the data, and then test if the data is displayed correctly
});
