import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import '@testing-library/jest-dom';

  test("Confirma que se encuentra el botón guardar", () => {

    render(<MemoryRouter><Form/></MemoryRouter>)

    const saveButton = screen.getByText(/Guardar/i);
    expect(saveButton).toBeDefined();
    expect(saveButton.tagName).toBe('BUTTON');
  })
