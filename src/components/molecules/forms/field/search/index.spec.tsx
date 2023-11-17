import { expect, it, describe, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { FieldSearch } from "@/components";

describe("Test Search", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<FieldSearch />);
    expect(getByTestId("input-text")).toBeTruthy();
    expect(true).toBeTruthy();
  });

  it("should render with placeholder", () => {
    const { getByPlaceholderText } = render(<FieldSearch placeholder="Cari data..." />);
    expect(getByPlaceholderText("Cari data...")).toBeTruthy();
  });

  it("should render with onChange", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <FieldSearch placeholder="Cari data..." handleSearch={onChange} />,
    );
    expect(getByPlaceholderText("Cari data...")).toBeTruthy();
    expect(onChange).toBeCalledTimes(0);
    fireEvent.change(getByPlaceholderText("Cari data..."), { target: { value: "test" } });
    expect(onChange).toBeCalledTimes(1);
  });
});
