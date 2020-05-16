<template lang="pug">
  #app
    //- #nav
    //-   b-navbar(:transparent='true')
    //-     template(slot='brand')
    //-       b-navbar-item(tag='router-link' :to='{ path: "/" }')
    //-         img(src="@/assets/images/self.jpg")
    //-     template(slot='start')
    //-       b-navbar-item(href="#") Home
    //-       b-navbar-item(href="#") About Me
    router-view
</template>

<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');

@font-face {
  font-family: 'Roboto';
  src: url('~@/assets/fonts/Roboto/Roboto-Regular.ttf');
}

a, a:hover, a:active {
  color: #363636 !important;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
