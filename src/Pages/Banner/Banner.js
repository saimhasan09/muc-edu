import React from 'react';
import Header from '../Header/Header';
import './Banner.css';

const Banner = () => {
  return (
    // < className="banner-bg " style= {{backgroundImage: "url(https://i.ibb.co/cchtKWP/image-1.png)"}}>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/6nJXGn7/img-3.jpg" alt="img-3" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload pictures online</a><br /> https://i.ibb.co/Wn6HxL5/img-1.jpg

    <div>
      <Header></Header>
      <section class="relative bg-white">

        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://i.ibb.co/6nJXGn7/img-3.jpg"
          alt="Couple on a bed with a dog"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-gray-900 sm:to-transparent"></div>

        <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left" data-aos="fade-right">
            <h1 class=" text-gray-100 text-3xl font-extrabold sm:text-5xl">
              Let us Build your
              <strong class="font-extrabold text-gray-200 sm:block">
                Future Destination.
              </strong>
            </h1>



            <div class="flex flex-wrap gap-4 mt-8 text-center">
              <a class="block w-full px-12 py-3 text-sm font-bold text-gray-900 rounded shadow bg-gray-100 sm:w-auto active:bg-gray-500 hover:bg-gray-600 hover:text-gray-100 focus:outline-none focus:ring" href="#">
                History
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Banner;

