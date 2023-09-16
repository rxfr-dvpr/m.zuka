<template>
    <section class="catalog__section" id="catalog">
        <div class="container">
            <div class="row">
                <h2 class="catalog-title all-title">{{ $t('main.catalog.title') }}</h2>

                <div class="catalog__cards">
                    <CatalogCard v-for="(card, idx) in $tm('main.catalog.cards')" :key="idx" :cardObj="card"/>
                </div>
            </div>
        </div>

        <img :src="windowSize > 768 ? bgImg.big : bgImg.mb" alt="" class="bg-img">
    </section>
</template>

<script>
import CatalogCard from './CatalogCard.vue'
import { catalogStore } from "@/stores/catalogStore";

export default {
    name: "Catalog",
    components: {
        CatalogCard
    },
    data() {
        return {
            bgImg: {
                big: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FCatalogSection%2Fcatalog-bg.png?alt=media&token=c974e356-c53f-434e-afc8-c845832c6b17',
                mb: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FCatalogSection%2Fcatalog-mb-bg.png?alt=media&token=61d65b16-8de5-4a7e-a433-ca5d27766f81'
            },
            ctStore: catalogStore(),
            windowSize: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.catalog__section {
    width: 100%;
    padding: 130px 0 130px;
    position: relative;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 80px;
    }

    .catalog-title {
        text-align: center;
        color: var(--main-pink);
        text-transform: capitalize;
    }

    .catalog__cards {
        max-width: 1020px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;
    }

    .bg-img {
        width: 100%;
        height: 110%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
}

@media (max-width: 768px) {
    .catalog__section {
        .row {
            row-gap: 50px !important;
        }
    }
}


</style>