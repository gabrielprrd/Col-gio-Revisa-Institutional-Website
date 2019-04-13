<template>
  <div id="app" v-cloak>
    <Header />
    <Nav />
    <transition name="page-transition" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Footer,
    Home
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
