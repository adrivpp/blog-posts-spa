import posts from './data/posts'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchPosts () {
    return fetch(posts, 1000)
  },
  create () {
    return fetch(posts, 100)
  },
  delete () {
    return fetch(posts, 100)
  },
  update () {
    return fetch(posts, 100)
  }
}
