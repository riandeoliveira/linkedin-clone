import { render } from "@testing-library/react";
import Header from ".";

describe("Header Template", () => {
  it("should have all the six nav links", () => {
    const { getAllByRole } = render(<Header />);

    const navLinks: HTMLElement[] = getAllByRole("link");

    expect(navLinks.length).toEqual(6);
  });
});
