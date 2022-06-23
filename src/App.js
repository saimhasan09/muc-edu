import './App.css';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,

// } from "react-router-dom";

// import Header from './Pages/Header/Header';
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Footer/Footer';
import Lectures from './Pages/Lectures/Lectures';
import Statistics from './Pages/Statistics/Statistics';
import MajorThree from './Pages/MajorThree/MajorThree';
import Notice from './Pages/Notice/Notice';
import Gallary from './Pages/Gallary/Gallary';
import News from './Pages/News/News';
import Corners from './Pages/Corners/Corners';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <MajorThree></MajorThree>
      <Lectures></Lectures>
      <Notice></Notice>
      <News></News>
      <Corners></Corners>
      <Gallary></Gallary>
      <Statistics></Statistics>
      <Footer></Footer>
    </div>
  );
}

export default App;
