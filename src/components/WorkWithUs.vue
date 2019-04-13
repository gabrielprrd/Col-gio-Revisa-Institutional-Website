<template>
    <div id="work-with-us" class="page" key="3">
        <div id="work-image-container" data-sal="slide-right"
                data-sal-duration="600"
                data-sal-delay="400"
                data-sal-easing="ease">
            <div id="img-overlay"></div>
            <img src="../images/work-with-us/woman-work.jpg" id="woman-work-img" />
            <img src="../images/work-with-us/business-woman.jpg" id="business-woman-img" />
            <h2>Trabalhe conosco</h2>
        </div>
        
        <div class="container" >
            <form @submit.prevent="checkEmployeeForm" enctype="multipart/form-data">
                <h4>Deseja fazer parte da nossa equipe? Envie-nos seu currículo!</h4>
                <div class="form-group">
                    <label for="applied-name">Nome completo:</label>
                    <input type="text" class="form-control" id="applied-name" placeholder="Digite seu nome" v-model="appliedName">
                </div>

                <div class="form-group">
                    <label for="applied-email">Email:</label>
                    <input type="email" class="form-control" id="applied-email" aria-describedby="nameHelp" placeholder="Digite seu email" v-model="appliedEmail">
                    <small id="emailHelp" class="form-text text-muted">Não compartilharemos seu email com ninguém.</small>
                </div>

                <div class="form-group">
                    <label for="curriculum-input">Seu currículo:</label><br>
                    <input type="file" ref="file" name="file" @change="onFileSelected($event.target.files)" class="form-control-file" id="curriculum-input">
                    <button type="submit" class="btn btn-primary" @click="onUpload">Fazer upload</button>
                </div>

                <div class="form-group">
                    <label for="apply-text-area">Deseja acrescentar alguma informação?</label>
                    <textarea class="form-control" id="apply-text-area" rows="3" v-model="appliedTextArea"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <ThankYouModal v-if="formAccepted" @closeModal="closePopUp($event)" />
        </div>
        
    </div>
</template>

<script>
import { applyNameRef } from '../firebase'
import axios from 'axios';
import sal from "sal.js";
import ThankYouModal from './ThankYouModal'


export default {
  name: 'WorkWithUs',
  components: {
      ThankYouModal
  },
   mounted() {
        sal({
            threshold: .1
        });
    },
    data() {
    return {
            appliedName: '',
            appliedEmail: '',
            appliedTextArea: '',
            selectedFile: null,
            formAccepted: false
    }
  },
  methods: {
    onFileSelected(event) { //o erro é aqui ou acima, por enquanto
        this.selectedFile = event.target.files[0]
    },
    onUpload() {
        
    },
    checkEmployeeForm() {
        axios({ method: "POST", "url": "http://localhost:8080/work-with-us", "data": this.files })
            .then(result => {
                    console.dir(result.data);
                }, error => {
                    console.error(error);
                });

      applyNameRef.push([
        { appliedName: this.appliedName, edit: false },
        { appliedEmail: this.appliedEmail, edit: false },
        { appliedTextArea: this.appliedTextArea, edit: false },
        { files: this.files, edit: false }
      ])

      this.formAccepted = true; // Shows Modal Confirming
    //   // Reset the inputs after uploading everything
      this.appliedName = ''
      this.appliedEmail = ''
      this.appliedTextAre = ''
      this.files = null
    },
    closePopUp($event) {
                this.formAccepted = $event;
            }
  },
  props: {    
      // Use "value" here to enable compatibility with v-model
      value: Object
    }
}
</script>
