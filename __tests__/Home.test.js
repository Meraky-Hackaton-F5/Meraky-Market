// test ("1 + 1 = 2", function (){
//     expect (1+1).toBe(2)
// })
import { render, screen } from "@testing-library/react";
import  Home  from "../src/pages/Home";
import '@testing-library/jest-dom/extend-expect';

describe ("vamos a probar la Home", function () {
    test ("la pantalla principal se ve bien", function (){
        render(<Home />)
        screen.debug()
        const titulo = screen.getByText("probando test")
        expect (titulo).toBeInTheDocument()
         })
})