<template>
  <div class="text-xs-center" v-if="isLoading">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>  
  <v-layout v-else>
    <v-flex xs12> 
      <PostsCard 
      v-for="(post, index) in posts"
      :post="post"
      :id="index"
      :key="index"
      :detail="false"
      />
    </v-flex>
  </v-layout>    
  
</template>

<script>
import { mapActions } from 'vuex'
import PostsCard from './PostsCard'

export default {   
  name: 'Posts',
  components: {
    PostsCard,
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'fetchPosts',      
    ])
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted() {    
    this.isLoading = true    
    this.fetchPosts()
      .then(posts => {
        this.isLoading = false         
      })      
  }
}
</script>