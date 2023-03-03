import React from "react";
import './Carrousel.module.css'

const Carrousel = () => {
  function rotate() {
    var lastChild = ".slider div:last-child".clone();
    /*('#test').html(lastChild)*/
    ".slider div".removeClass("firstSlide")(".slider div:last-child").remove();
    ".slider".prepend(lastChild)(lastChild).addClass("firstSlide");
  }

  window.setInterval(function () {
    rotate();
  }, 4000);

  return (
    <>
      <div class="container">
        <div class="slider">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
      </div>
      <div id="test"></div>
    </>
  );
};

export default Carrousel;
