import { render, screen } from "@testing-library/react";
import NavFooter from "./NavFooter";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import '@testing-library/jest-dom';


describe("NavFooter", ()=>{

    beforeEach(()=>{
        render(<MemoryRouter><NavFooter/></MemoryRouter>)
    })

  test("Verificar que el texto Mappseum esta dentro delc componente", () => {

    const texto = screen.getByText(/MappSeum/i);
    expect(texto).toBeDefined();
  })

  test("Verificar que existe una imagen de logo", () => {

    const logoImage = screen.getByAltText(/logoMappseum/i);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'src/assets/mappseum-logo.png');
  })

})