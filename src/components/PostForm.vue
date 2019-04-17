
<template>
  <v-layout>
    <v-flex xs12>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="post.title"           
          label="Title"
          required="true"
          :rules="requiredRules"
        ></v-text-field>
        <v-textarea
          v-model="post.body"      
          label="Body"
          required
          :rules="requiredRules"
        ></v-textarea>   
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          full-width
          max-width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="post.date"
              clearable
              label="Publication date"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="post.date"
            @change="menu1 = false"
          ></v-date-picker>
        </v-menu>
        
        <v-btn @click="handleSubmit">submit</v-btn>    
      </v-form>
      <div v-if="alert">
        <Alerts/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Alerts from './Alerts'
import { truncate } from 'fs';
export default {
  name: 'PostForm',
  props: ['post', 'onSubmit', 'id'],
  components: {
    Alerts
  },
  data() {
    return {      
      menu1: false,
      valid: true,
      alert: false,
      requiredRules: [(field) => {        
        if(field === undefined) {
          return ''
        } else if(field.trim() === '') {
          return 'Field must not be empty.'
        }        
        return true;
      }],
    }
  },  
  methods: {
    handleSubmit() {      
      if(this.valid) {        
        this.onSubmit(this.post, this.id)        
        this.$router.push({ path: '/' })     
      }       
      this.alert = true     
    }  
  },  
} 
</script>