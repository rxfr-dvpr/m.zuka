<template>
    <div class="swiper-slider-box">
        <swiper :navigation="{prevEl:'.swiper-btn.prev', nextEl:'.swiper-btn.next'}" :spaceBetween="35" :modules="modules" class="header-swiper">
            <swiper-slide class="header-swiper-slide" v-for="(img, idx) in sliderImages" :key="idx">
                <img :src="img.img" alt="" class="swiper-img">
                <a :href="$t('header.sliderBtn.url')" v-if="windowSize > 768" class="contact-btn blue-btn">{{ $t('header.sliderBtn.name') }}</a>
            </swiper-slide>
        </swiper>

        <button class="swiper-btn prev"><i class="fal fa-angle-left"></i></button>
        <button class="swiper-btn next"><i class="fal fa-angle-right"></i></button>
    </div>

    <a :href="$t('header.sliderBtn.url')" v-if="windowSize < 768" class="contact-btn blue-btn">{{ $t('header.sliderBtn.name') }}</a>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Header Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            sliderImages: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/HeaderSlider%2FArtboard%201.png?alt=media&token=91d04d58-8d38-464c-a756-ee67972014ab'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/HeaderSlider%2FArtboard%202.png?alt=media&token=2fd180db-f714-44a3-947b-55044eec9254'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/HeaderSlider%2FArtboard%203.png?alt=media&token=c4146b0a-af51-459c-9766-e458926b5597'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/HeaderSlider%2FArtboard%204.png?alt=media&token=93aae127-0670-49ca-af96-4e103cc588dd'
                }
            ],
            windowSize: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.swiper-slider-box {
    max-width: 1370px;
    width: 100%;
    position: relative;
}

.header-swiper {
    width: 100%;
    border-radius: 40px;

    &-slide {
        width: 100%;
        user-select: none;
        position: relative;

        .swiper-img {
            width: 100%;
            border-radius: 40px;
            display: block;
            pointer-events: none;
        }

        .contact-btn  {
            position: absolute;
            bottom: 20%;
            left: 5%;
        }
    }
}

.swiper-btn {
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    background: var(--main-blue);
    border-radius: 50%;
    border: 0;
    width: 50px;
    min-width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    font-size: 35px;
    border: solid 2px var(--main-blue);
    transition: .4s;
    filter: drop-shadow(0px 4px 8px rgba(0, 129, 255, 0.15));

    &.swiper-button-disabled {
        border-color: #D1DAE4;
        background: transparent;
        
        i {
            color: #D1DAE4;
        }
    }

    &.prev {
        left: -5%;
        padding-right: 3px;
    }

    &.next {
        right: -5%;
        padding-left: 3px;
    }
}

@media (max-width: 1900px) {
    .swiper-btn {
        &.prev {
            left: 2%;
        }

        &.next {
            right: 2%;
        }
    }
}

@media (max-width: 668px) {
    .header-swiper, .swiper-img {
        border-radius: 20px !important;
    }
    
    .swiper-btn {
        font-size: 25px;
        width: 35px;
        min-width: 35px;
        height: 35px;
    }

    .contact-btn {
        padding: 10px 25px;
        font-size: 16px;
    }
}

</style>