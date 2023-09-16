<template>
  <form method="POST" @submit.prevent="sendtoBot" class="contact-form">
    <h3 class="form-title">{{ $t('main.form.title') }}</h3>

    <div class="inputs-grid">
        <input type="text" class="name-inp" v-model="nameV" :placeholder="$t('main.form.nameInp')" required>
        <input type="email" class="email-inp" v-model="emailV" :placeholder="$t('main.form.emailInp')" required>
        <input type="number" class="tel-inp" v-model="telV" :placeholder="$t('main.form.telInp')" required>
        <textarea class="msg-inp" cols="30" rows="10" v-model="msgV" :placeholder="$t('main.form.msgInp')" required></textarea>
    </div>

    <button class="submit-btn blue-btn">{{$t('main.form.btnV')}}</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
    name: "Contact Form",
    data() {
        return {
            nameV: '',
            emailV: '',
            telV: '',
            msgV: '',
            token: '6423011899:AAHKu4zARV77MXwHytxR5fV3cX5qNyWlhIg',
            chatId: 368010639,
        }
    },
    methods: {
        sendtoBot() {
            const fullMsg = `Ismi: ${this.nameV}
            Email: ${this.emailV}
            Tel: ${this.telV}
            Xabar: ${this.msgV}`
            axios
            .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMsg}`)
            .then((res) => {
                console.log('success sent');
            })
            .catch((err) => {
                console.error(err);
            })

            this.nameV = ''
            this.emailV = ''
            this.telV = ''
            this.msgV = ''
        }
    }
}

</script>

<style lang="scss" scoped>

.contact-form {
    max-width: 905px;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    border-radius: 8px;
    background: #F2F8FE;

    .form-title {
        color: var(--main-blue);
        font-size: calc(24px + 8 * (100vw / 1920));
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .inputs-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;

        input, textarea {
            border: 0;
            padding: 8px 16px;
            color: var(--main-txt-blue);
            font-weight: 600;

            &::placeholder {
                color: var(--main-txt-blue);
                text-transform: capitalize;
                font-weight: 400;
            }
        }
    }

    .name-inp { grid-area: 1 / 1 / 2 / 3; }
    .email-inp { grid-area: 2 / 1 / 3 / 3; }
    .tel-inp { grid-area: 3 / 1 / 4 / 3; }
    .msg-inp { grid-area: 1 / 3 / 4 / 5; }
}

@media (min-width: 1920px) {
    .form-title {
        font-size: 32px !important;
    }
}

@media (max-width: 668px) {
    .contact-form {
        padding: 25px;

        .inputs-grid {
            display: flex !important;
            flex-direction: column;
        }
    }
}

</style>