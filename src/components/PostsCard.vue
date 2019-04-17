<template>      
  <v-card v-if="new Date().toISOString().substr(0, 10) >= this.post.date" >
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ post.title }}</h3>
        <div> {{ post.body }} </div>
        <div> {{ post.date }} </div>
      </div>
    </v-card-title>

    <v-card-actions>
      <router-link :to="`/post/${id}`" v-if="!detail">
        <v-btn flat color="orange">View</v-btn>
      </router-link>          
        <v-btn flat color="orange" v-else
        @click="onEdit()"
        >
          Edit
        </v-btn>          
      <PostsDeleteButton :id="id"/>
    </v-card-actions>
  </v-card>    
</template>

<script>

import PostsDeleteButton from './PostsDeleteButton'

export default {   
  name: 'PostsCard',
  props: ['post', 'id', 'detail', 'onEdit'],     
  components: {
    PostsDeleteButton
  },
  
}
  
</script>


