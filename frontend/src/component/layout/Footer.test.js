import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders Footer component", () => {
    const { getByText, getByRole } = render(<Footer />);

    // Check if "One stop shop for buying, selling & rentals" text is rendered
    const footerText = getByText(
      /One stop shop for buying, selling & rentals ./i
    );
    expect(footerText).toBeInTheDocument();

    // Check if "Copyright 2024" text is rendered within the footer
    const copyrightText = getByText(/Copyright 2024/i);
    expect(copyrightText).toBeInTheDocument();

    // Add more assertions for other elements/components as needed
  });
});
