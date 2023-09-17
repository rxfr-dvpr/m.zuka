<template>
    <section class="catalog__section" id="catalog">
        <div class="container">
            <div class="row">
                <h2 class="catalog-title all-title">{{ $t('main.catalog.title') }}</h2>

                <div class="catalog__cards-box">
                    <div class="catalog__cards" v-for="(cards, idx) in $tm('main.catalog.cards')" :key="idx" 
                    v-show="prdActivePages[idx].active">
                        <CatalogCard v-for="(card, idd) in cards" :key="idd" :cardObj="card"/>
                    </div>
                </div>

                <div class="catalog__cards-pagination">
                    <span class="pagination-option" v-for="(pag, id) in $tm('main.catalog.cards')" :key="id"
                    :class="{'active': prdActivePages[id].active}" @click="showHideCatalog(id)">
                        {{ id + 1 }}
                    </span>
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
            prdActivePages: []
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    },
    created() {
        const arr = [...this.$tm('main.catalog.cards')]
        arr.forEach((element, idx) => {
            const obj = {active: false}
            idx == 0 ? obj.active = true : ''
            this.prdActivePages.push(obj)
        });
    },
    methods: {
        showHideCatalog(idx) {
            this.prdActivePages.map(item => item.active = false)
            this.prdActivePages[idx].active = true
            window.scrollTo(0, 1200)
        }
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

    .catalog__cards-box {
        width: 100%;
        gap: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .catalog__cards {
            max-width: 1020px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
        }
    }

    .catalog__cards-pagination {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        .pagination-option {
            color: var(--primary-color);
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
            padding: 5px 10px;
            background: var(--main-blue);
            border-radius: 10px;
            border: solid 2px transparent;
            user-select: none;

            &:hover {
                color: var(--main-blue);
                background: transparent;
                border-color: var(--main-blue);
            }

            &.active {
                color: var(--main-blue);
                background: transparent;
                border-color: var(--main-blue);
            }
        }
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