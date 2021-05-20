import React from "react"
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils"
import HomePage from "../../pages/index"

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />)
    const heading = screen.getByText(/Midwest Fish Talk/i)
    expect(heading).toBeInTheDocument()
  })

  it("should render an image", () => {
    const { getByAltText } = render(<HomePage />)
    const img = getByAltText(/fishing in the midwest/i)
    expect(img).toBeInTheDocument()
  })
})
