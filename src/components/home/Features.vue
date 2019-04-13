<template>
    <div id="features-container">
        
        <h1>Resultados comprovados</h1>
                <div class="features-row" 
                    data-sal="slide-up"
                    data-sal-duration="1200"
                    data-sal-delay="100"
                    data-sal-easing="ease">

                    <div class="icon-container">
                        <img src="../../images/features/trophy.svg">
                        <p>1º lugar no VestFict</p>
                    </div>

                    <div class="icon-container">
                        <img src="../../images/features/exam.svg">
                        <p>Nota A nas pesquisas de metodologia</p>
                    </div>

                    <div class="icon-container">
                        <img src="../../images/features/medal.svg">
                        <p>+300 aprovações por todo o Brasil</p>
                    </div>

                </div>

        <h1>Modernização e Cidadania</h1>
        <div class="features-row"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="100"
                data-sal-easing="ease">

            <div class="icon-container">
                <img src="../../images/features/wheelchair.svg">
                <p>Acessibilidade</p>
            </div>

            <div class="icon-container">
                <img src="../../images/features/laptop.svg">
                <p>Sala de aula virtual</p>
            </div>

            <div class="icon-container">
                <img src="../../images/features/love.svg">
                <p>Ações Solidárias</p>
            </div>

        </div>
        
    </div>
</template>

<script>
import sal from "sal.js";

export default {
    name: 'Features',
    mounted() {
        sal({
            threshold: .2
        });
    },
}
</script>

<style <style lang="scss">
@import "../../../node_modules/sal.js/dist/sal.css";
</style>

