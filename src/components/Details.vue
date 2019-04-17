<template>
  <v-layout align-center justify-center>
    <v-flex xs6> 
      <PostsCard
      :post="post"
      :id="Number($route.params.id)"
      :detail="true"
      :onEdit="toggleForm"
      />
      <PostForm 
      v-if="isShown"
      :post="post"
      :id="Number($route.params.id)"
      :onSubmit="updatePost"      
      />
    </v-flex>
  </v-layout>
</template>

<script>
import PostsCard from './PostsCard'
import { mapActions, mapState } from 'vuex'
import PostForm from './PostForm'

export default {
  name: 'home',
  data() {
    return {
      post: {},
      isShown: false
    }
  },  
  computed: {
    ...mapState([
      'posts'
    ])
  },
  components: {
    PostsCard,
    PostForm
  },  
  methods: {   
    ...mapActions([
      'fetchPosts',
      'updatePost'
    ]),
    toggleForm() {
      this.isShown = !this.isShown
    },
  },
  created() {
    this.fetchPosts()
    .then(() => {     
      this.post = this.posts[this.$route.params.id]   
    })        
  }  
}
</script>
