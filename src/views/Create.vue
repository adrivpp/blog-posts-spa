<template lang="html">
  <PostForm :post="formData" :onSubmit="createPost"></PostForm>
</template>

<script>
import { mapActions } from 'vuex'
import PostForm from '@/components/PostForm';

export default {
  components: {
    PostForm,
  },
  data() {
    return {
      formData: {
        title: '',
        body: '',
        date: new Date().toISOString().substr(0, 10),
      }
    }
  },
  methods: {     
    ...mapActions([
    'createPost'
    ]),    
  },      
};
</script>