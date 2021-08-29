import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {GameOfLife} from "./GameOfLife";

describe("Game of life component testing", () => {
  it("should render component", () => {
    render(<GameOfLife />);
    screen.getByText("Game of life");
    screen.getByText("Next generation");
    screen.getByText("Reset");
  });

  it("check the next generation after selecting cells", async () => {
    render(<GameOfLife />);
    const cells = await screen.findAllByLabelText("cell");
    userEvent.click(cells[0]);
    userEvent.click(cells[1]);
    userEvent.click(cells[2]);
    userEvent.click(cells[8]);
    const modifiedCells = await screen.findAllByLabelText("cell");
    expect(modifiedCells[0]).toHaveStyle("backgroundColor: rgb(51, 227, 255)");
    expect(modifiedCells[4]).toHaveStyle("backgroundColor: undefined");
    userEvent.click(screen.getByRole("button", {name: "Next generation"}));
    const newGenerationCells = await screen.findAllByLabelText("cell");
    expect(newGenerationCells[4]).toHaveStyle("backgroundColor: undefined");
  });
});
