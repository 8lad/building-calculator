import { render, screen } from "@testing-library/react";
import { CurrentDate } from "./CurrentDate";
import { getCurrentFullDate } from "../../utils/helpers";

const testingComponent = <CurrentDate />;

test("Render current element correctly", () => {
  render(testingComponent);
  expect(true).toBeTruthy();
});

test("Check correct date", () => {
  render(testingComponent);
  const currentFullDate = getCurrentFullDate();
  const currenText = screen.getByText(currentFullDate).textContent;
  expect(currenText).toEqual(currentFullDate);
});
