<template>
  <v-btn flat color="orange"
  @click="onDelete"      
  >Delete
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {  
  name: 'PostsDeleteButton',
  props: {
    id: Number
  },    
  methods: {
    ...mapActions([
      'deletePost',      
    ]),
    onDelete() {
      this.deletePost(this.id)
      .then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
  
</script>
