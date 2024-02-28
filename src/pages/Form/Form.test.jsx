import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import '@testing-library/jest-dom';

describe("Form", ()=>{

    beforeEach(()=>{
        render(<MemoryRouter><Form/></MemoryRouter>)
    })

  test("Confirma que se encuentra el botón guardar", () => {

    const saveButton = screen.getByText(/Cancelar/i);
    expect(saveButton).toBeDefined();
    expect(saveButton.tagName).toBe('BUTTON');
  })

})

/* En lugar de usar toHaveAttribute('button'), se utiliza saveButton.tagName para obtener el nombre del elemento y 
luego se verifica que sea 'BUTTON', lo que confirma que el elemento es un botón. */