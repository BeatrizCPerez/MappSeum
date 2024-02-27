// Las funciones de test, comprenden de dos parametros, el nombre del test y el codigo de mi test
import { render, screen } from "@testing-library/react";
import NavFooter from "./NavFooter";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import '@testing-library/jest-dom';

  test("textoFooter", () => {
    render(<MemoryRouter><NavFooter/></MemoryRouter>)

    const texto = screen.getByText(/MappSeum/i);
    expect(texto).toBeDefined();
  })

  test("Verificar que existe una imagen de logo", () => {
    render(<MemoryRouter><NavFooter/></MemoryRouter>)

    const logoImage = screen.getByAltText(/logoMappseum/i);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'src/assets/mappseum-logo.png');
  })

  