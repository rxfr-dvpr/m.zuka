<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img :src="logo" alt="" class="logo-img">
            </router-link>
            
            <div class="nav__collapse" :class="{'opened': navmbOpened}">
                <ul class="nav__list">
                    <li class="nav__list-item" v-for="(link, idx) in $tm('nav.links')" :key="idx">
                        <a :href="link.url"  class="nav__list-link">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>

                <div class="lang-select white-btn">
                    <span class="lang-option" :class="{'active': lang.active}" v-for="(lang, idd) in $tm('nav.langs')" :key="idd" @click="onChange">{{ lang.name }}</span>
                </div>

                <a :href="$t('nav.btn.url')" class="contact-btn white-btn">
                    <span class="contact-btn-icon" v-html="$t('nav.btn.icon')"></span>
                    {{ $t('nav.btn.name') }}
                </a>
            </div>

            <button class="nav-mb-btn" @click="navmbOpened = !navmbOpened" v-if="windowSize < 768">
                <i class="fal fa-ellipsis-h-alt" v-if="!navmbOpened"></i>
                <i class="fal fa-times" v-else></i>
            </button>
        </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from "vue-i18n";
import { catalogStore } from "@/stores/catalogStore";

export default {
    name: 'Navigation',
    data() {
        return {
            i18n: useI18n({useScope: "global"}),
            logo: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/logo.svg?alt=media&token=afacb956-7dd4-40c6-8b2a-06bb5078a7f3',
            ctStore: catalogStore(),
            navmbOpened: false,
            windowSize: window.innerWidth
        }
    },
    methods: {
        onChange(e) {
            const langSelects = document.querySelectorAll('.lang-option');
            this.i18n.locale = e.target.innerHTML;
            this.ctStore.catalogCard = this.$tm('main.catalog.cards');
            langSelects.forEach(item => item.classList.remove('active'))
            e.target.classList.add('active');
            localStorage.lang = e.target.innerHTML
            location.reload()
        }
    },
    mounted() {
        const langSelects = document.querySelectorAll('.lang-option');

        langSelects.forEach(item => {
            item.classList.remove('active')
            item.innerHTML == localStorage.lang ? item.classList.add('active') : '' 
        })

        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    background: var(--main-blue);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2023;

    .row {
        justify-content: space-between;
        gap: 50px;
        align-items: center;
        flex-wrap: nowrap;
    }

    &-logo {
        max-width: 90px;
        width: 100%;
        user-select: none;
        z-index: 4;

        img {
            width: 100%;
            display: block;
            pointer-events: none;
        }
    }

    &__collapse {
        max-width: 1190px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        .nav__list {
            max-width: max-content;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 30px;

            &-link {
                font-size: 18px;
                transition: .4s;
                text-transform: capitalize;

                &:hover {
                    color: var(--main-pink);
                }
            }
        }

        .lang-select {
            display: flex;
            gap: 7px;
            margin-left: auto;

            .lang-option {
                font-size: 18px;
                text-transform: capitalize;
                cursor: pointer;
                opacity: .5;
                transition: .4s;

                &:hover {
                    opacity: 1;
                }

                &:nth-child(1) {
                    display: flex;
                    gap: 7px;

                    &::after {
                        content: '';
                        background: #4EA7FF;
                        width: 2px;
                        height: 100%;
                        display: block;
                    }
                }

                &.active {
                    opacity: 1;
                }
            }
        }

        .contact-btn {
            display: flex;
            gap: 7px;
            padding-left: 15px;
            align-items: center;

            span {
                font-size: 15px;
            }
        }
    }
}

@media (max-width: 768px) {
    .nav {
        padding: 15px 0;

        &-logo {
            max-width: 70px;
        }

        &__collapse {
            max-width: max-content;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            background: var(--main-blue);
            padding: 15px;
            transform: translateX(120%);
            z-index: 200;

            .nav__list {
                flex-direction: column;
                align-items: flex-end;
            }

            &.opened {
                transform: translateX(0);
            }
        }

        &-mb-btn {
            background: transparent;
            border-radius: 50%;
            border: 2px solid #4EA7FF;
            min-width: 60px;
            max-width: 60px;
            height: 60px;
            font-size: 25px;
            display: grid;
            place-items: center;
            z-index: 300;
        }
    }
}

</style>