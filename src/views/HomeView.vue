<template>
  <Header/>

  <main class="main">
    <Catalog/>

    <AboutUs/>

    <Contact/>
  </main>

  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Catalog from '@/components/Catalog.vue'
import AboutUs from '@/components/AboutUs.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home View',
  components: {
    Header,
    Catalog,
    AboutUs,
    Contact,
    Footer
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>