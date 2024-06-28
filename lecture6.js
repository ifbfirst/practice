class DataHandler {
  constructor() {
    this.posts = [];
  }

  async fetchPosts(url) {
    const response = await fetch(url);
    try {
      const data = await response.json();
      this.posts = data;
    } catch {
      (err) => console.log(err);
    }
  }

  listPosts() {
    return this.posts.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  getPosts(id) {
    return this.posts[id - 1];
  }

  clearPosts() {
    this.posts.length = 0;
  }
}

const dataHandler = new DataHandler();
dataHandler
  .fetchPosts("https://jsonplaceholder.typicode.com/posts")
  .then(() => {
    dataHandler.listPosts();
    dataHandler.getPosts(33);
  })
  .catch((err) => console.log(err));
