<template>
  <div class="header__info-cards">
    <div class="header__info-card" v-for="(card, idx) in $tm('header.infoSection')" :key="idx">
        <div class="header__info-img-box">
            <img :src="card.img" alt="" class="header__info-img">
        </div>

        <div class="header__info-descr">
            <p class="info-num">+{{ dtNum[idx].num || 0 }} <span v-if="card.type">{{ card.type }}</span></p>
            <p class="info-name">{{ card.name || 'no name' }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Header Info',
    data() {
        return {
            dtNum: [],
        }
    },
    methods: {
        runNum() {
            const arr = [...this.$tm('header.infoSection')]

            arr.map((item, idx) => {
                let newNum = 0;
                let num = item.num
                this.dtNum.push({num: newNum});

                const func = () => {
                    newNum++         
                    this.dtNum[idx].num = newNum

                    if (newNum < num) {
                        setTimeout(() => {
                            func()
                        }, 200);
                    }
                }
                func()
            })

        }
    },
    beforeMount() {
        this.runNum()
    }
}

</script>

<style lang="scss" scoped>

.header__info-cards {
    max-width: 1160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    .header__info-card {
        max-width: 260px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;

        .header__info {
            &-img-box {
                max-width: 88px;
                min-width: 88px;
                min-height: 88px;
                max-height: 88px;
                width: 100%;
                background: #F3F9FF;
                border-radius: 50%;
                overflow: hidden;
                display: grid;
                place-items: center;
                user-select: none;
                pointer-events: none;

                img {
                    max-width: 48px;
                    width: 100%;
                    display: block;
                }
            }

            &-descr {
                max-width: max-content;
                width: 100%;
                display: flex;
                flex-direction: column;

                .info-num {
                    font-size: calc(24px + 20 * (100vw / 1920));
                    color: var(--main-blue);
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    span {
                        color: var(--main-blue);
                    }
                }

                .info-name {
                    font-size: calc(16px + 2 * (100vw / 1920));
                    text-transform: capitalize;
                    color: var(--main-gray);
                    font-weight: 600;
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .info-num {
        font-size: 44px !important;
    }

    .info-name {
        font-size: 18px !important;
    }
}

@media (max-width: 320px) {
    .header__info {
        &-img-box {
            max-width: 60px !important;
            min-width: 60px !important;
            min-height: 60px !important;
            max-height: 60px !important;
            width: 100%;

            img {
                max-width: 35px !important;
            }
        }
    }
}

</style>