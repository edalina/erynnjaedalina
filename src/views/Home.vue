<template lang="pug">
  .home
    .banner.position-relative
      parallax(:speed-factor="0.3" :sectionHeight='100')
        img.parallax-image(src='@/assets/images/wallpaper-main.jpg')
      .main-text-holder.black-20-overlay
        .main-title
          div.font-alternate Erynn Jae
          div Dalina
    .portfolio-section.section
      section.hero(style='flex: 1;')
        .hero-body
          .container(style='height: 100%; display: flex; flex-direction: column;')
            h1.title Portfolio
            h2.subtitle A full-stack developer with 8 years of experience.
            .columns.portfolio-wrapper
              .column.is-one-third.portfolio
                .icon
                  i.fab.fa-node
                .head-title
                  | NodeJS
                .description
                  | 4+ years experience
              .column.is-one-third.portfolio
                .icon
                  i.fab.fa-java
                .head-title
                  | Java EE
                .description
                  | 4+ years experience
              .column.is-one-third.portfolio
                .icon
                  i.fas.fa-code
                .head-title
                  | HTML &amp; CSS
                .description
                  | 7+ years experience
            .columns.portfolio-wrapper
              .column.is-one-third.portfolio
                .icon
                  i.fab.fa-vuejs
                .head-title
                  | VueJS
                .description
                  | 3+ years experience
              .column.is-one-third.portfolio
                .icon
                  i.fas.fa-database
                .head-title
                  | SQL
                .description
                  | 7+ years experience
              .column.is-one-third.portfolio
                .icon
                  i.fab.fa-react
                .head-title
                  | React Native
                .description
                  | 6 months experience
    .hire-me.section.position-relative
      .black-20-overlay.position-absolute
        section.hero
          .hero-body
            .container
              h1.title Have some offer or project?
              h2.subtitle Send an email to &nbsp;
                a.links(href='mailto:yjaedalina@gmail.com') yjaedalina@gmail.com
    .footer
      //- .content.has-text-centered
      div Erynn Jae Dalina &copy; 2020
      div
        a.social-icons(href='https://www.facebook.com/erynnjaedalina' target='_blank')
          i.fab.fa-facebook
        a.social-icons(href='https://www.linkedin.com/in/erynnjaedalina' target='_blank')
          i.fab.fa-linkedin
        a.social-icons(href='mailto:yjaedalina@gmail.com')
          i.fas.fa-at
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'
import Parallax from 'vue-parallaxy'
import $ from 'jquery'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    Parallax
  },
  data () {
    return {
    }
  },
  mounted () {
    $('.life-events-tree .point .label').click(function () {
      $(this).parent().children('.content').slideToggle()
    })
    window.onscroll = (e) => {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
  .Masthead__image.is-parallax>img {
    object-position: 10% !important;
  }
</style>

<style lang="scss" scoped>
  .banner {
    & .main-text-holder {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      &::before {
        content: ' ';
        position: absolute;
        left: calc(50% + 1rem);
        top: 10%;
        bottom: 10%;
        width: 10px;
        background: #07e4b2;
      }
      & img {
        max-height: 250px;
        height: 80vh;
        border-radius: 100%;
        opacity: 0.9;
      }
      & .main-title {
        @media screen and (max-width: 970px) {
          font-size: 4em;
        }
        @media screen and (max-width: 740px) {
          font-size: 3em;
        }
        width: 50%;
        position: absolute;
        left: 50%;
        color: #EFEFEF;
        margin-left: 2.5rem;
        font-size: 5rem;
        text-align: left;
        line-height: 1em;
      }
    }
  }
  .section {
    min-height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    align-content: center;
    justify-content: center;
    &:nth-child(odd) {
      background-color: #EEE;
    }
  }
  .portfolio-wrapper {
    & .portfolio {
      & .icon {
        font-size: 4em;
        margin-top: 50px;
      }
      & .head-title {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      & .description {

      }
    }
  }
  .hire-me {
    background-color: gray;
    background-image: url('~@/assets/images/blur-bg-code.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    & .position-absolute {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    & * {
      color: #EFEFEF !important;
    }
  }
  .life-events-section {
    display: flex;
    justify-content: flex-start;
    padding-top: 50px !important;
    & .life-events-tree {
      text-align: left;
      & .point {
        display: flex;
        flex-direction: row;
        position: relative;
        align-items: center;
        & .label {
          background: #EEE;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &::after {
          }
        }
        & .content {
          position: absolute;
          background: #EEE;
          left: 70px;
          top: 10px;
          padding: 20px;
          height: 100px;
          display: none;
          &::before {
            content: ' ';
            position: absolute;
            left: -10px;
            top: 5px;
            width: 0px;
            height: 0px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 10px solid #EEE;
          }
        }
        // &:hover .content {
        //   display: block;
        // }
      }
    }
  }
  .footer {
    padding: 0;
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
  .social-icons {
    font-size: 1.5em;
    margin: 10px;
  }
  .width-75 {
    // width: 75% !important;
    // min-width: 300px;
  }
  .position-relative {
    position: relative;
  }
  .position-absolute {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .black-20-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  .white-bg {
    background: rgba(255, 255, 255, 0.5);
  }
  .font-alternate {
    color: #07e4b2 !important;
  }
  .links {
    @extend .font-alternate;
  }
</style>
