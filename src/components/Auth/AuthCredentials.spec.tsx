import { render, screen, fireEvent } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should toggle values", () => {
    render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );
    // screen.getByText("Is user logged? NO", { exact: false });
    // screen.getByText("NO", { exact: false });
    screen.getByText(/no/i);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
    // expect().toThrow
  });
});
