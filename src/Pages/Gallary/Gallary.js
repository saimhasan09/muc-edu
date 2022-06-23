import React from 'react';

const Gallary = () => {
  return (
    //<a href="https://ibb.co/qyYM9nx"><img src="https://i.ibb.co/X2xZp4V/img-5.jpg" alt="img-5" border="0"></a>
    <div>
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto flex flex-wrap text-center">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-8xl font-bold  title-font mb-4 text-gray-900">Gallary</h1>

          </div>
          <div class="flex flex-wrap md:-m-2 -m-1  ">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/X2xZp4V/img-5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary;