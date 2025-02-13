import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Navigation } from "./navigation";

describe("navigation", () => {
    it("should render the navigation component", () => {
        render(<Navigation />)
        expect(screen.getByText("Overview")).toBeInTheDocument()
        expect(screen.getByText("Transactions")).toBeInTheDocument()
        expect(screen.getByText("Budgets")).toBeInTheDocument()
        expect(screen.getByText("Pots")).toBeInTheDocument()
        expect(screen.getByText("Recurring bills")).toBeInTheDocument()
    })
})