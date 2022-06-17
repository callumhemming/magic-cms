import {render, screen} from "@testing-library/react"
import Home from "../pages/index"
import '@testing-library/jest-dom'



  test("Should show navbar",()=>{
    render(<Home/>)
    const title = screen.getByLabelText('Open Study College CMS')
  })