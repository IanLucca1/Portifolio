import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Home/Sobre'
import Projetos from './pages/Home/Projetos'
import Contatos from './pages/Home/Contato'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import Base from './pages/PaginaBase'



function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes path='/' element={ <Base /> }> 
                    <Route index element={ <Home /> }></Route>
                    <Route path="/Sobre" element={ <Sobre /> }></Route>
                    { <Route path="/Projetos" element={ <Projetos /> }></Route> }
                    <Route path="/Contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes