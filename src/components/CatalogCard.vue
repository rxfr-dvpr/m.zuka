<template>
  <div class="catalog-card" @click="showModal">
    <img :src="cardObj.mainImg" alt="" class="catalog-card-img">

    <div class="catalog-card-descr">
        <p class="catalog-card-name">{{ name }}</p>
        <p class="catalog-card-txt">{{ txt }}</p>

        <div class="catalog-card-bottom">
            <p class="size-txt">{{ size.type }}: <span>{{ size.txt }}</span></p>

            <button class="light-blue-btn" @click="showModal"><i class="fal fa-long-arrow-right"></i></button>
        </div>
    </div>
  </div>

<Transition name="fade">
    <div class="catalog-modal-bg" v-show="modalVisible" @click.self="this.modalVisible = false">
        <div class="catalog-modal">
            <swiper :navigation="true" :spaceBetween="10" :modules="modules" class="modal-swiper">
                <swiper-slide class="modal-swiper-slide" v-for="(img, idx) in sliderImages" :key="idx">
                    <img :src="img.img" alt="" class="swiper-img">
                </swiper-slide>
            </swiper>

            <div class="catalog-modal-descr">
                <p class="descr-name">{{ name }}</p>
                <p class="descr-size">{{ size.type }}: <span>{{ size.txt }}</span></p>
                <p class="descr-season">{{ season.type }}: <span>{{ season.txt }}</span></p>
                <p class="descr-fabric">{{ fabric.type }}: <span>{{ fabric.txt }}</span></p>

                <button class="modal-btn blue-btn">{{ $t('main.catalog.btnValue') }}</button>
            </div>

            <button class="close-btn" @click="this.modalVisible=false"><i class="fal fa-times"></i></button>
        </div>
    </div>
</Transition>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Catalog Card',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        cardObj: {
            type: Object,
            default: {},
            required: true
        }
    },
    data() {
        return {
            name: this.cardObj.name,
            txt: this.cardObj.txt,
            size: this.cardObj.descr.size,
            season: this.cardObj.descr.season,
            fabric: this.cardObj.descr.fabric,
            sliderImages: this.cardObj.images,
            modalVisible: false,
            modules: [Navigation]
        }
    },
    methods: {
        showModal() {
            this.modalVisible = true
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog-card {
    max-width: 324px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    padding: 8px 8px 24px;
    background: #fff;
    border-radius: 32px;
    cursor: pointer;
    user-select: none;
    transition: .4s;

    &-img {
        width: 100%;
        max-height: 270px;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 26px;
    }

    &-descr {
        max-width: 270px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: flex-start;
    }

    &-name {
        width: 100%;
        color: var(--main-blue);
        font-size: calc(22px + 2 * (100vw / 1920));
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &-txt {
        font-size: 16px;
        font-weight: 500;
        color: var(--main-plhd-clr);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    &-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 35px;
        
        .size-txt {
            max-width: 60%;
            font-size: 12px;
            color: var(--main-plhd-clr);
            display: flex;
            flex-direction: column;
            text-transform: capitalize;
            font-weight: 500;

            span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 14px;
                font-weight: 600;
                text-transform: lowercase;
                color: var(--main-txt-blue);

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        .light-blue-btn {
            background: #F2F8FE;
            border-radius: 50%;
            min-width: 50px;
            min-height: 50px;
            max-width: 50px;
            max-height: 50px;
            width: 100%;
            height: 100%;
            border: 0;
            font-size: 20px;

            i {
                color: var(--main-blue);
                transform: rotate(-40deg);
            }
        }
    }

    &:hover {
        background: var(--main-blue);

        .catalog-card {
            &-name, &-txt {
                color: var(--primary-color);
            }
        }

        .size-txt {
            color: var(--primary-color);

            span {
                color: var(--primary-color);
            }
        }

        .light-blue-btn {
            i {
                transform: rotate(0);
            }
        }
    }
}

.catalog-modal-bg {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: .7);
    display: grid;
    place-items: center;
    z-index: 3035;
    overflow-y: auto;
    overflow-x: hidden;
}

.catalog-modal {
    max-width: 780px;
    width: 100%;
    padding: 35px 55px 35px 35px;
    background: #f2f2f2;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    gap: 35px;
    position: relative;

    .modal-swiper {
        max-width: 350px;
        width: 100%;
        border-radius: 32px;
        overflow: hidden;
        margin: 0 0;
        
        &-slide {
            width: 100%;
            img {
                width: 100%;
                max-height: 350px;
                height: 100%;
                object-fit: cover;
                border-radius: 32px;
            }
        }
    }        

    &-descr {
        max-width: 280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 16px;

        .descr {
            &-name {
                font-size: 24px;
                font-weight: 700;
                color: var(--main-blue);

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-size, &-season, &-fabric {
                font-size: 12px;
                color: var(--main-plhd-clr);

                &::first-letter {
                    text-transform: uppercase;
                }

                span {
                    font-size: 14px;
                    color: var(--main-txt-blue);
                    font-weight: 500;
                    
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    .modal-btn {
        margin-top: auto;
    }

    .close-btn {
        position: absolute;
        top: 3.5%;
        right: 2%;
        border: solid 2px #B0BAC3;
        border-radius: 50%;
        min-width: 45px;
        max-width: 45px;
        min-height: 45px;
        min-height: 45px;
        background: transparent;
        font-size: 22px;
        background: #f2f2f2;
        z-index: 3;

        i {
            color: #B0BAC3;
        }

        &:hover {
            background: var(--main-blue);
            border-color: transparent;

            i {
                color: var(--primary-color);
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 1920px) {
    .catalog-card {
        &-name {
            font-size: 24px !important;
        }
    }
}

@media (max-width: 886px) {
    .catalog-modal-bg {
        padding: 0 15px;

        .catalog-modal {
            max-width: max-content;
            width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 35px;

            &-descr {
                align-items: center;
                text-align: center;
            }
        }

        .close-btn {
            top: 2%;
            right: 3%;
        }
    }
}

@media (max-width: 468px) {
    .catalog-modal {
        padding: 25px !important;
    }

    .modal-swiper {
        max-width: 250px !important;
    }
}

@media (max-width: 368px) {
    .catalog-modal {
        padding: 20px !important;
    }

    .modal-swiper {
        max-width: 200px !important;
    }
}

</style>