import React from 'react';

function Slider(){
  return (
    <div className='container'>
      <div id="slider" className="carousel slide m-5 rounded border border-secondary" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#slider" data-bs-slide-to="0" className="active border border-light bg-dark"></li>
          <li data-bs-target="#slider" data-bs-slide-to="1" className='border border-light bg-dark'></li>
          <li data-bs-target="#slider" data-bs-slide-to="2" className='border border-light bg-dark'></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="slider/slider1.png"/>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="slider/slider2.jpg"/>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="slider/slider3.jpg"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#slider" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
        </a>
        <a className="carousel-control-next" href="#slider" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
        </a>
      </div>
    </div>
  );
}

export default Slider
