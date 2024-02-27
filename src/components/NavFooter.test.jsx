// Las funciones de test, comprenden de dos parametros, el nombre del test y el codigo de mi test
import { fireEvent, render, screen } from "@testing-library/react";
import NavFooter from "./NavFooter";
import { expect } from "vitest";

// metodo - primer parametro - funcion anonima, pot tanto directamente comienza con una funcion flecha
test("render NavFooter", () => {
    //llamamos al renderizado e importamos la funcion 
    render(<NavFooter/>)

    const countElement = screen.getByText(/count is/i)

    expect(countElement).toBeDefined();
})


test("should rise when buton pressed"), () => {
    render(<App/>)

    const countElement = screen.getByText(/count is/i)

    fireEvent.click(countElement)
    const increaseNumber = screen.getByText(/1/i)
    expect(increaseNumber).toBeDefined();
}