<template>
<!-- LEMBRAR DE TROCAR O INPUT="TEXT PRA "EMAIL" -->
    <div class="container page" key="2"  id="contact-page">
      
      <h2>Contato</h2>
        <p>Dúvidas, sugestões, reclamações?</p>
        
        <form id="contact-form" @submit.prevent="checkContactForm">
            <div class="form-group">
                <label for="contact-name">Nome:</label>
                <input type="text" class="form-control" id="contact-name" name="contact-name" placeholder="Digite seu nome" v-model="contactName">
            </div>

            <div class="form-group">
                <label for="contact-email">Email:</label>
                <input type="email" class="form-control" id="contact-email" name="contact-email" placeholder="Digite seu email" v-model="contactEmail">
                <small id="email-help" class="form-text text-muted">Não compartilharemos seu email com ninguém.</small>
            </div>

            <div class="form-group">
                <label for="contact-text-area">Sinta-se à vontade para dizer o que quiser:</label>
                <textarea class="form-control" id="contact-text-area" name="contact-text-area" placeholder="Escreva aqui" rows="3" v-model="contactTextArea"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

          <ThankYouModal v-if="formAccepted" @closeModal="closePopUp($event)" />

    </div>
</template>

<script>
import { contactNameRef } from '../firebase'
import ThankYouModal from './ThankYouModal'

export default {
  name: 'Contact',
  components: {
    ThankYouModal
  },
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactTextArea: '',
      formAccepted: false
    }
  },
  methods: {
    checkContactForm() {
      contactNameRef.push([
        { contactName: this.contactName, edit: false },
        { contactEmail: this.contactEmail, edit: false },
        { contactTextArea: this.contactTextArea, edit: false }
      ])
      this.formAccepted = true;
    },
    closePopUp($event) {
                this.formAccepted = $event;
    }
  }
}
</script>

