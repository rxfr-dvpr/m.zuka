<template>
  <section class="about__section" id="about">
    <div class="container">
        <div class="row">

            <h2 class="about-title all-title">{{ $t('main.about.title') }}</h2>

            <div class="about__content">
                <div class="about__content-descr">
                    <p class="about__descr-subtitle">{{ $t('main.about.content.descr.subtitle') }}</p>
                    <h2 class="about__descr-title">{{ $t('main.about.content.descr.title') }}</h2>
                    <p class="about__descr-txt">{{ $t('main.about.content.descr.txt') }}</p>
                </div>

                <img :src="contentImg" alt="" class="about__content-img">
            </div>

        </div>
    </div>

    <img :src="windowSize > 768 ? bgIMG.big : bgIMG.mb" alt="" class="about-bg-img">
  </section>
</template>

<script>

export default {
    name: 'About Us',
    data() {
        return {
            bgIMG: {
                big: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FAboutUs%2Fabout-us-bg.png?alt=media&token=e4d9ff9e-4699-4088-9248-abda32912727',
                mb: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FAboutUs%2Fmb-about-bg.png?alt=media&token=5c8ae86b-547a-4942-acd7-77271b7ee568'
            },
            contentImg: "https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FAboutUs%2Fabout-us-img.png?alt=media&token=614a94ae-c06d-4efd-b033-7a53259c200b",
            windowSize: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    position: relative;
    padding: 100px 0 155px;

    .row {
        flex-direction: column;
        row-gap: 90px;
    }

    .about-title {
        text-align: center;
        text-transform: capitalize;
        color: var(--main-yellow);
    }

    .about__content {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 60px;

        &-descr {
            max-width: 520px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;
        }

        .about__descr {
            &-subtitle {
                font-size: 16px;
                color: var(--main-yellow);
                font-weight: 600;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-title {
                font-size: 30px;
                
                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-txt {
                font-size: 18px;
                color: #BCD6F0;
                
                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        &-img {
            max-width: 550px;
            width: 100%;
        }
    }

    .about-bg-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: -1;
    }
}


</style>