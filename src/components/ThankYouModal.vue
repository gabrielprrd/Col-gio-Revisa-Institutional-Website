<template>
        <div id="modal-container">

            <img id="close-icon" src="../images/thank-modal/cancel.svg" alt="Close Pop-up" @click="closeModal">

            <div id="modal-outer-bg" @click="closeModal"></div>
            <div id="thank-you-modal">
                <img src="../images/thank-modal/email.svg" alt="Success">
                <h3>Enviado com sucesso!</h3>
                <p>Obrigado. Entraremos em contato :)</p>
            </div>    
        </div>
</template>

<script>
export default {
    name: 'ThankYouModal',
    methods: {
        closeModal() {
            this.$emit('closeModal', false);
        }
    }
}
</script>
