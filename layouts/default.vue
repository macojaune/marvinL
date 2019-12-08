<template lang="pug">
  nuxt
</template>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  @import url('https://fonts.googleapis.com/css?family=Muli');
  @import url('https://fonts.googleapis.com/css?family=PT+Serif');

  @font-face {
    font-family: 'DK';
    src: url('~assets/dk_canoodle-webfont.woff2') format('woff2'),
    url('~assets/dk_canoodle-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }


  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Muli', sans-serif;
  }

  #__nuxt, #__layout {
    height: 100%;
  }

  /*               COLORS              */
  .yellow {
    color: #f1c40F;
  }

  .dark {
    color: #141627;
  }

  .dark-2 {
    color: #161931;
  }

  /*fonts */
  .dk {
    font-family: "DK";
  }

  .paci {
    font-family: 'Pacifico', cursive;
  }

  .pt {
    font-family: 'PT Serif', serif;
  }

  .rob {
    font-family: 'Roboto', sans-serif;
  }


  .section {
    min-height: 100%;
    height: auto;
  }

  #hello {
    /*background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);*/
    color: white;
    background: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%), url('https://subtlepatterns.com/patterns/geometry2.png') repeat 0 0;
    /*background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);*/
    background-blend-mode: multiply;
    -webkit-animation: slide 20s linear infinite;
  }

  #moi {
    background: url('https://www.toptal.com/designers/subtlepatterns/patterns/darkness.png');
    /*background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-colorful.png');*/
    background-blend-mode: multiply;
    -webkit-animation: slide3 40s ease infinite;
    -o-animation: slide3 40s ease infinite;
    animation: slide3 40s ease infinite;
    /*background-image:  linear-gradient(225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);*/
    /*background-image: linear-gradient(-225deg, !*#48c6ef*! #4ECDC4 0%, #6f86d6 100%);*/
    color: white;
  }

  #work {
    /*background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);*/
    background: url('https://www.toptal.com/designers/subtlepatterns/patterns/hypnotize.png'), linear-gradient(to right, #fc6076 0%, #ff9a54 100%) repeat 0 0;
    color: white;
    padding-bottom: 30px;
    height: auto;
    background-blend-mode: multiply;
    -webkit-animation: slide2 20s linear infinite;
    -o-animation: slide2 20s linear infinite;
    animation: slide2 20s linear infinite;
  }

  #contact {
    background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/pink%20dust.png), linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
    background-blend-mode: luminosity;
    color: white;
    -webkit-animation: slide 70s ease infinite;
    -o-animation: slide 70s ease infinite;
    animation: slide 70s ease infinite;
  }

  #mail {
    color: white;
    text-decoration: none;
  }

  /*     ANIMATIONS            */
  #helloTitle .char3, #helloTitle .char4, #effect .char3, #effect .char5, #effect .char8, #effect .char11 {
    display: inline-block;
    position: relative;
    -webkit-animation: 0.9s arrow infinite ease;
    -o-animation: 0.9s arrow infinite ease;
    animation: 0.9s arrow infinite ease;
  }

  @-webkit-keyframes arrow {
    0%, 100% {
      left: 0px;
    }
    50% {
      left: 5px;
    }
  }

  @-webkit-keyframes arrow2 {
    from {
      left: 0px
    }
    to {
      left: 12px
    }
  }

  @-webkit-keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -400px 0;
    }
  }

  @-webkit-keyframes slide2 {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -400px;
    }
  }

  @-webkit-keyframes slide3 {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 400px;
    }
  }

  @media (min-width: 769px) {

  }

  @media (max-width: 768px) {

  }

  @media (max-width: 640px) {

  }
</style>
