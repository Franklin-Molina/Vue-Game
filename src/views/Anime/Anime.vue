<template>
  <div class="categorias padre fondo2">
    <div class="bloque">
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">Let's Go</span>
          <a href="/tamCarro">
            <button class="">
              <div>3 X 2</div>
            </button>
          </a>
        </div>
      </div>
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">MASK2</span>
          <a href="/tamCarro">
            <button class="">
              <div>4 X 3</div>
            </button>
          </a>
        </div>
      </div>
      <br />
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">MASK2</span>
           <a href="/tamCarro">
            <button class="">
              <div>5 X 4</div>
            </button>
          </a>
        </div>
      </div>
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">MASK2</span>
         <a href="/tamCarro">
            <button class="">
              <div>6 X 5</div>
            </button>
          </a>
        </div>
      </div>
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">MASK2</span>
           <a href="/tamCarro">
            <button class="">
              <div>8 X 7</div>
            </button>
          </a>
        </div>
      </div>
      <div class="bloques col-6">
        <div class="button-container-2">
          <span class="mas">MASK2</span>
         <a href="/carros">
            <button class="">
              <div>9 X 8</div>
            </button>
          </a>
        </div>
      </div>
     
    </div>
  </div>
</template>

<style >
.bloques {
  width: 50%;

  padding: 3px 3px 3px 5px;

  display: inline-block;
}

.fondo2 {
 /*  background: url("../assets/fondo2.jpg") no-repeat center top; */

  width: 100%;
  height: 100%;
  height: 100vh;
  background-size: cover;
}

.padre {
  background-size: 100%;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: table;
}

.bttn {
  background-size: 100%;
  display: block;
  padding: 10px;
  text-align: center;
  margin: auto;
  color: white;
  letter-spacing: 1px;
  transition: all 300ms;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  font-family: "Arial Black";
  text-shadow: black -2px 2px;
  border-bottom: 6px solid #000;
}
.bttn-cat {
  border-radius: 10px;
  width: 98%;
  height: 70px;
  font-size: small;
}

.bloque {
  margin-top: 200px;
}

@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400");
@import url("https://fonts.googleapis.com/css?family=Roboto:100");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  margin-top: 12vh;
}

.footer {
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-top: 15vh;
}

.button-container-1 {
  position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6vh;
  overflow: hidden;
  border: 1px solid;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
}
.button-container-1 button {
  width: 101%;
  height: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: bold;
  background: #000;
  -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
  border: none;
  color: #fff;
  cursor: pointer;
  -webkit-animation: ani2 0.7s steps(22) forwards;
  animation: ani2 0.7s steps(22) forwards;
}
.button-container-1 button:hover {
  -webkit-animation: ani 0.7s steps(22) forwards;
  animation: ani 0.7s steps(22) forwards;
}

.button-container-2 {
  position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  overflow: hidden;
  border: 1px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
}
.button-container-2 button {
  width: 101%;
  height: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: bold;
  background: #000;
  -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  -webkit-mask-size: 3000% 100%;
  mask-size: 3000% 100%;
  border: none;
  color: #fff;
  cursor: pointer;
  -webkit-animation: ani2 0.7s steps(29) forwards;
  animation: ani2 0.7s steps(29) forwards;
}
.button-container-2 button:hover {
  -webkit-animation: ani 0.7s steps(29) forwards;
  animation: ani 0.7s steps(29) forwards;
}

.mas {
  position: absolute;
  color: #000;
  text-align: center;
  width: 101%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  position: absolute;
  font-size: 11px;
  margin-top: 17px;
  overflow: hidden;
  font-weight: bold;
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}
@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}
a {
  color: #00ff95;
}

.button-container-3 {
  position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8vh;
  overflow: hidden;
  border: 1px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
}
.button-container-3 button {
  width: 101%;
  height: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: bold;
  background: #000;
  -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
  mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
  -webkit-mask-size: 7100% 100%;
  mask-size: 7100% 100%;
  border: none;
  color: #fff;
  cursor: pointer;
  -webkit-animation: ani2 0.7s steps(70) forwards;
  animation: ani2 0.7s steps(70) forwards;
}
.button-container-3 button:hover {
  -webkit-animation: ani 0.7s steps(70) forwards;
  animation: ani 0.7s steps(70) forwards;
}
</style>