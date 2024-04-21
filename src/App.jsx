import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Home from './assets/Pages/Home/Home'
import Menu from './assets/Pages/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from './assets/Components/Usuario/Usuario';
import Mascotas from './assets/Components/Mascotas/Mascotas';
import Registro from './assets/Components/Registro/Registro';
import Login from './assets/Components/Login/Login';
import Mas from './assets/Components/Mas/Mas';
import PerfilMascotas from './assets/Components/PerfilMascotas/PerfilMascotas';
import FormularioAdopcion from './assets/Components/Formulario/FormularioAdopcion';
import Mapa from './assets/Components/Mapa/Mapa';
import EstadoAdopcion from './assets/Components/Estado/EstadoAdopcion';
import OnBoardingOne from './assets/Components/OnBoarding/OnBoardingOne';
import OnBoardingFour from './assets/Components/OnBoarding/OnBoardingFour';
import OnBoardingTwo from './assets/Components/OnBoarding/OnBoardingTwo';
import OnBoardingThree from './assets/Components/OnBoarding/OnBoardingThree';
import LoginAsociacion from './assets/Components/LoginAsociacion/LoginAsociacion';
import Carrusel from './assets/Components/OnBoarding/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MascotasID from './assets/Components/Mascotas/Mascota/Mascota';
import Filtros from './assets/Components/Filtros/Filtros';
import Novedades from "./assets/Components/Novedades/Novedades";
import CarouselNovedades from "./assets/Components/Novedades/CarouselNovedades";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/sweetHomeAlabama" element={<Home />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mas" element={< Mas />} />
          <Route path="/perfilmascotas" element={<PerfilMascotas />} />
          <Route path="/formulario" element={<FormularioAdopcion />} />
          <Route path="/estados" element={<EstadoAdopcion />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/boardingone" element={<OnBoardingOne />} />
          <Route path="/boardingtwo" element={<OnBoardingTwo />} />
          <Route path="/boardingthree" element={<OnBoardingThree />} />
          <Route path="/boardingfour" element={<OnBoardingFour />} />
          <Route path="/asociacion" element={<LoginAsociacion />} />
          <Route path="/carrusel" element={<Carrusel />} />
          <Route path="/mascotas/:id" element={<MascotasID />} />
          <Route path="/filtros" element={<Filtros />} />
          <Route path="/" element={<Novedades />} />
          <Route path="/carousel" element={<CarouselNovedades />} />
        </Routes>
        <Menu></Menu>
      </Router>
    </>
  )
}

export default App
