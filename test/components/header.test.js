import { render } from "../test-utils"
import Header from "../../components/Header"

describe("Header", () => {
  it("should render logo", () => {
    const { getByAltText } = render(<Header />)
    expect(getByAltText("mft_logo")).toBeInTheDocument()
  })
})
