export default {
  setPosts (state, posts) {
    state.posts = posts
  },
  create (state, post) {
    state.posts.push(post)
  },
  delete  (state, index) {
    state.posts.splice(index, 1)
  },
  update  (state, post, index) {
    state.posts[index] = post
  }
}
