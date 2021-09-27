import React from 'react'
import * as ReactDOM from "react-dom"
import Footer from './index'

it("renders content correctly", ()=>{
    const container = document.createElement("div")
    ReactDOM.render(<Footer />, container)

    expect(container.querySelector("footer").textContent).toBe("21TEES 2021")
})