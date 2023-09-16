<template>
  <footer class="footer">

    <div class="footer__top">
      <div class="container">
        <div class="row">
          <router-link to="/" class="footer-logo">
            <img :src="logo" alt="" class="footer-logo-img">
          </router-link>

          <div class="footer__list">
            <a :href="link.url" class="footer__list-link" v-for="(link, idx) in $tm('nav.links')" :key="idx">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <div class="row">
          <p class="footer__bottom-date">©2020-{{ new Date().getFullYear() }} M.zuka Kids</p>
          <p class="footer__bottom-copyright">{{ $t('footer.bottom.cpTxt') }}</p>
        </div>
      </div>
    </div>

      <span class="curved-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="288" viewBox="0 0 1920 288" fill="none" class="curved-svg">
          <path d="M1920 153.902V288H0V153.514C244.099 58.7607 583.819 0 959.5 0C1335.69 0 1675.83 58.9214 1920 153.902Z" fill="#0081FF"/>
        </svg>
      </span>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      logo: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/logo.svg?alt=media&token=afacb956-7dd4-40c6-8b2a-06bb5078a7f3'
    }
  }
}

</script>

<style lang="scss" scoped>

.footer {
  max-width: 1920px;
  width: 100%;
  padding: 65px 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  margin: 0 auto;
  overflow: hidden;

  .curved-bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, 2%);
  }

  &__top {
    width: 100%;
    
    .row {
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
    }

    .footer-logo {
      max-width: 90px;
      width: 100%;

      img {
        width: 100%;
      }
    }

    .footer__list {
      max-width: max-content;
      width: 100%;
      display: flex;
      column-gap: 55px;
      row-gap: 25px;
      align-items: center;
      justify-content: center;

      &-link {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 600;

        &:hover {
          color: var(--main-pink);
        }
      }
    }
  }

  &__bottom {
    width: 100%;
    border-top: #329AFF 1px solid;
    
    .row {
      justify-content: space-between;
      padding: 20px 0;
      align-items: center;
    }

    &-date {
      font-size: 14px;
      text-transform: capitalize;
    }

    &-copyright {
      font-size: 14px;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

@media (max-width: 370px) {
  .footer__list {
    flex-direction: column;
  }

  .curved-bg {
    transform: scale(1.5) translate(-34%, -5%) !important;
  }

  .footer__bottom {
    .row {
      flex-direction: column;
    }
  }
}

</style>