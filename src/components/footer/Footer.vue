<template>
    <footer>
        <div id="footer-content">
            <div id="footer-column-1" class="column-footer">
                <img class="logotipo" src="../../images/logo/logo-white.svg">
                <p>Este site institucional é um projeto fictício com objetivo de mostrar parte dos meus conhecimentos em desenvolvimento web e compor meu portfolio.</p>
            </div>

            <div id="footer-column-2" class="column-footer">
                <h1>Contato</h1>
                <span class="inner-footer-wrapper"><img src="../../images/footer-icons/phone-solid.svg"><p>(21) 2482-0734</p></span>
                <span class="inner-footer-wrapper"><img src="../../images/footer-icons/envelope-solid.svg"><p>contato@colegiorevisa.com.br</p></span>
                <div id="social-icons">
                    <a href="#"><img src="../../images/footer-icons/facebook-f-brands.svg"></a>
                    <a href="#"><img src="../../images/footer-icons/twitter-brands.svg"></a>
                    <a href="#"><img src="../../images/footer-icons/instagram-brands.svg"></a>
                </div>
            </div>

            <div id="map-row" class="column-footer">
                <FooterMap />
                <p>Av. Vicente de Carvalho, 416</p>
                <p>Vicente de Carvalho, Rio de Janeiro</p>
                <p>CEP: 21371-148</p>
            </div>
            
        </div>

        <div id="credits-container">
            <p>Fictional website. Designed and coded by <a href="https://github.com/gabrielprrd">Gabriel Afonso</a></p>
        </div>
    </footer>
</template>

<script>
import FooterMap from './FooterMap'

export default {
  name: 'Footer',
  components: {
      FooterMap
  }
}
</script>
