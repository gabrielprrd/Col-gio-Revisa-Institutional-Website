<template>
    <nav id="nav">
            <router-link to="/">
                <img class="logotipo" src="../images/logo/logo-white.svg" />
            </router-link>

            <!-- Checkbox to make the responsive menu without js -->
            <input type="checkbox" id="my-checkbox">
            
            <!-- Sandwich responsive menu -->
            <label for="my-checkbox" class="show-menu-btn">
                <img src="../images/header/bars-solid.svg" alt="navigation-menu">
            </label>
            
            <transition name="animate-modal" mode="out-in">
            <div id="nav-menu">
                
                    <router-link to="/" @click.native="closeMenu">Home</router-link>

                    <router-link to="/about" @click.native="closeMenu">O Colégio</router-link>

                    <router-link to="/work-with-us" @click.native="closeMenu">Trabalhe Conosco</router-link>
              
                    <router-link to="/contact" @click.native="closeMenu">Contato</router-link>
                
                <!-- Button to close the responsive menu --> 
                <label for="my-checkbox" class="hide-menu-btn">
                    <img src="../images/thank-modal/cancel.svg" alt="close-navigation-menu">
                </label>
            </div>
            </transition>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
      methods: {
      closeMenu() {
          let chbx = document.getElementById('my-checkbox')
          if (this.windowQuery.matches) {
              chbx.checked = false
          }
      }
  },
  mounted() {
    this.windowQuery = window.matchMedia('(max-width: 800px)')
  }
}
</script>
