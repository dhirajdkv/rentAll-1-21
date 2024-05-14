import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

// Mocking the ContactMe component
jest.mock("./ContactMe", () => () => <div>ContactMe component</div>);

describe("Footer component", () => {
  it("renders the Footer component with uncommented code", () => {
    const { getByAltText, getByText } = render(<Footer />);

    // Ensure the logo is rendered
    const logoImage = getByAltText("rentAll Logo");
    expect(logoImage).toBeInTheDocument();

    // Ensure the italic text is rendered
    const italicText = getByText(
      "One stop shop for buying, selling & rentals ."
    );
    expect(italicText).toBeInTheDocument();

    // Ensure the copyright text is rendered
    const copyrightText = getByText("Copyright 2024 © rentAll:");
    expect(copyrightText).toBeInTheDocument();

    // Ensure the ContactMe component is not rendered
    expect(() => getByText("ContactMe component")).toThrow();
  });
});
