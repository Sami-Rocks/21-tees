import React from 'react'
import * as ReactDOM from "react-dom"
import Banner from './index'

test("renders content corrctly", () => {
    const container = document.createElement("div")
    ReactDOM.render(<Banner />, container)

    expect(container.querySelector("h1").textContent).toBe("DO YOU HAVE YOUROWN DESIGN?")
    expect(container.querySelector("button").textContent).toBe("SHOW US")
})