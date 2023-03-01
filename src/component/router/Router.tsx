import { Route, Routes } from "react-router-dom"
import { HomeRoute } from "./HomeRoute"
import { Index } from "../pages/Index"
import { Create } from "../pages/Create"

export const Router = () => {
    return(
        <Routes>
            <Route 
            path="/"
            element={<Index />}>
            </Route>
            <Route 
            path="/create"
            element={<Create />}>
            </Route>

        </Routes>
    )
}