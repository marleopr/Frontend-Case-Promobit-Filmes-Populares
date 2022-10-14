import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsPage from "../pages/details/DetailsPage"
import HomePage from "../pages/home/HomePage"
import SearchPage from "../pages/search/SearchPage"
import ErrorPage from "../pages/error/ErrorPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="details/:id" element={<DetailsPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}