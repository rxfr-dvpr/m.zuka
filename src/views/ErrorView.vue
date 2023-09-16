<template>
  <section class="error__section">
    <div class="container">
        <div class="row">

            <p class="error-title">{{ $t('error.title') }}</p>

            <p class="error-msg">{{ $t('error.msg') }}</p>

            <router-link to="/" class="back-link">{{ $t('error.back') }}</router-link>

        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Error'
}

</script>

<style lang="scss" scoped>

.error__section {
    width: 100%;
    height: 70vh;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .error-title {
        color: var(--main-blue);
        font-size: calc(45px + 100 * (100vw / 1920));
        font-weight: 800;
    }

    .error-msg {
        font-size: calc(20px + 25 * (100vw / 1920));
        font-weight: 700;
        color: var(--main-txt-blue);
        text-transform: capitalize;
    }

    .back-link {
        font-size: 18px;
        color: var(--main-blue);
        font-weight: 600;
        margin-top: 20px;

        &:hover {
            transform: scale(1.1);
        }
    }
}

@media (min-width: 1920px) {
    .error-title {
        font-size: 145px !important;
    }

    .error-msg {
        font-size: 45px !important;
    }
}

</style>