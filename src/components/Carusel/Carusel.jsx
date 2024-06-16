import React from 'react'
import a from '../../img/content-img(93).png'
import b from '../../img/content-img(95).png'
import c from '../../img/content-img(98).png'
import s from '../../components//Carusel/Carusel.module.scss'
const Carusel = () => {
  return (
    <div className={s.aa}>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={a} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ЛЕГКИЙ ПАЛАНТИН</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={b} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ОБЬЕМНЫЙ ПАЛАНТИН</h5>
      </div>
    </div>
    <div class="carousel-item">
    <img src={c} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ТОНКИЙ ПАЛАНТИН</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






    </div>
  )
}

export default Carusel