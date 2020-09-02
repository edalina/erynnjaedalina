<template lang="pug">
  #app
    router-view
</template>
<script>
export default {
  metaInfo: {
    title: 'Erynn Jae Dalina',
    meta: [
      { name: 'description', content: 'Erynn Jae Dalina personal portfolio' },
      { name: 'og:title', content: 'Erynn Jae Dalina' },
      { name: 'og:description', content: 'Erynn Jae Dalina personal portfolio' },
      { name: 'twitter:title', content: 'Erynn Jae Dalina' },
      { name: 'twitter:description', content: 'Erynn Jae Dalina personal portfolio' }
    ]
  }
}
</script>

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
