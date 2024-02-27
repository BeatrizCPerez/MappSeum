// Las funciones de test, comprenden de dos parametros, el nombre del test y el codigo de mi test
import { render, screen } from "@testing-library/react";
import NavFooter from "./NavFooter";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";

  test("textoFooter", () => {
    render(<MemoryRouter><NavFooter/></MemoryRouter>)

    const texto = screen.getByText(/MappSeum/i);
    expect(texto).toBeDefined();
  })
