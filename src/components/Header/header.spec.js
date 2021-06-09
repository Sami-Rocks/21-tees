import React from 'react'
import * as ReactDOM from 'react-dom'
import Header from './index'
import { act, render } from '@testing-library/react'

test("renders content correctly", () =>{
    act(()=>{
        const container = document.createElement("div")
        ReactDOM.render(<Header/>, container)
        
        expect(container.textContent).toBe("21TEESCART")
    })
    act(()=>{
        const cont = render(<Header />)
        const elLogo = cont.getByTestId("logo")
        const elCart = cont.getByTestId("cart")
        
        expect(elLogo.textContent).toBe("21TEES")
        expect(elCart.textContent).toBe("CART")
    })
})