<template>
  <section class="contact__section" id="contact-us">
    <div class="container">
        <div class="row">

            <div class="contact__info">
                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7745.026323320958!2d69.01174038547474!3d40.910982726148994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae75ac5fbd77ab%3A0x4a1e178f88f8ad36!2z0JrRg9C50LjRh9C40YDRh9C40LrRgdC60LjQuSDRgNCw0LnQvtC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1694810179282!5m2!1sru!2s" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" class="ifr-map"></iframe>
                </div>

                <div class="contact-links">
                    <p class="contact-links-title all-title">{{ $t('main.contact.info.title') }}</p>

                    <a :href="link.url" target="_blank" v-for="(link, idx) in links" :key="idx" class="contact-link"><span class="icon" v-html="link.icon"></span> {{ link.name }}</a>

                    <div class="social-links">
                        <a :href="item.url" target="_blank" class="social-links-item" v-for="(item, id) in socialLinks" :key="id" v-html="item.icon"></a>
                    </div>
                </div>
            </div>

            <ContactForm/>
        </div>
    </div>

    <img :src="windowSize > 768 ? contactBgImg.big : contactBgImg.mb" alt="" class="contact-bg">
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
    name: 'Contact',
    components: {
        ContactForm
    },
    data() {
        return {
            links: [
                {
                    name: '+998(90) 906 23 25',
                    url: 'tel:+998909062325',
                    icon: '<i class="fas fa-phone-alt"></i>'
                },
                {
                    name: 'Toshkent viloyati, Quyi Chirchiq tumani, Mingchinor MFY',
                    url: 'https://maps.app.goo.gl/8qX8rB1qV6FymsBN7',
                    icon: '<i class="far fa-map-marker-alt"></i>'
                },
            ],
            socialLinks: [
                {
                    icon: '<i class="fab fa-telegram"></i>',
                    url: 'https://t.me/MZUKAtexz'
                },
                {
                    icon: '<i class="fab fa-facebook-f"></i>',
                    url: 'https://www.facebook.com/'
                },
                {
                    icon: '<i class="fab fa-instagram"></i>',
                    url: 'https://www.instagram.com/m.zuka.kids/'
                },
                {
                    icon: '<i class="fab fa-facebook-messenger"></i>',
                    url: 'https://www.messenger.com/'
                }
            ],
            contactBgImg: {
                big: "https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FContactSection%2Fcontact-bg.png?alt=media&token=54985e95-23d7-4e91-8863-ae511bc44998",
                mb: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/Main%2FContactSection%2Fcontact-mb-bg.png?alt=media&token=f4aa04f3-0444-4187-98e8-416629e66640'
            },
            windowSize: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.windowSize = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;
    padding: 260px 0 100px;
    position: relative;

    .row {
        flex-direction: column;
        row-gap: 80px;
        align-items: center;
    }

    .contact__info {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;

        .contact-map {
            max-width: 650px;
            width: 100%;

            .ifr-map {
                width: 100%;
            }
        }

        .contact-links {
            max-width: 450px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;

            &-title {
                color: var(--main-blue);

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .contact-link {
                font-size: 18px;
                color: var(--main-txt-blue);
                display: flex;
                align-items: center;
                gap: 15px;

                &:hover {
                    color: var(--main-blue);
                }

                .icon {
                    border-radius: 50%;
                    border: solid 2px #C9E4FF;
                    min-width: 48px;
                    max-width: 48px;
                    height: 48px;
                    display: grid;
                    place-items: center;
                }
            }

            .social-links {
                width: 100%;
                display: flex;
                gap: 20px;
                margin-top: auto;
            }
        }
    }

    .contact-bg {
        width: 100%;
        height: 120%;
        position: absolute;
        top: 0;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -5%);
    }
}

@media (max-width: 1024px) {
    .contact__section {
        padding: 100px 0 100px !important;
    }

    .contact-links {

        &-title {
            width: 100%;
            text-align: center;
            align-items: center;
        }

        .social-links {
            justify-content: center;
        }
    }
}

</style>