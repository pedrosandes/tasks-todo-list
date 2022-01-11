import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "pages"

const RoutesApp: React.FC  = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp