<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <HeaderSlider/>

            <HeaderInfo/>
        </div>
    </div>
  </header>
</template>

<script>
import HeaderInfo from './HeaderInfo.vue'
import HeaderSlider from './HeaderSlider.vue'

export default {
    name: 'Header',
    components: {
        HeaderSlider,
        HeaderInfo
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 40px 0 120px;

    .row {
        flex-direction: column;
        row-gap: 120px;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 40px 0 70px;
        
        .row {
            row-gap: 35px !important;
        }
    }
}

</style>