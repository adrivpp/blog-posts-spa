import client from '../api/mock/index'

export default {
  fetchPosts ({ commit }) {
    return client
      .fetchPosts()
      .then(posts => commit('setPosts', posts))
  },
  createPost ({ commit }, post) {
    return client
      .create()
      .then(() => commit('create', post))
  },
  deletePost ({ commit }, index) {
    return client
      .delete()
      .then(() => commit('delete', index))
  },
  updatePost ({ commit }, post, index) {
    return client
      .update()
      .then(() => commit('update', post, index))
  }
}
