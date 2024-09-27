import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsPage from "../pages/details/DetailsPage"
import HomePage from "../pages/home/HomePage"
import SearchPage from "../pages/search/SearchPage"
import ErrorPage from "../pages/error/ErrorPage.tsx"
import HeaderV2 from "../components/header/HeaderV2.tsx"
import Footer from "../components/Footer.tsx"

export const Router = () => {
  return (
    <BrowserRouter>
    <HeaderV2/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="details/:id" element={<DetailsPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}