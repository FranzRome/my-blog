<script>
export default {
  name: 'BlogPostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<template>
   <router-link :to="'/post/' + post.id" class="blog-post-card">
      <div>
        <span class="title">{{ post.title }}</span>
        <div class="meta">
          <span class="author">{{ post.author }}</span>
          <span class="date">{{ formatDate(post.date) }}</span>
      </div>
    </div>
    <div class="cover-container">
      <img :src="post.previewImg" class="cover" />
    </div>
  </router-link>
</template>

<style scoped>
* {
  text-decoration: none;
}

.blog-post-card {
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 20vw;
  background-color: #fff;
  padding: 1.2vw 1.4vw;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  text-align: center;
  font-size: 1vw;
}

.cover-container{
  display: flex;
  flex-grow: 1;
  flex-shrink: 0.5;
  justify-content: center;
}

.cover{
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
}

.blog-post-card:hover {
  transform: translate(0, -0.15vw);
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  border-bottom: 8px solid #FF9800;
}

.title {
  margin: 0 0 0.25vw;
  font-size: 1.3em;
  font-weight: 700;
}

.meta {
  font-size: 0.9em;
  margin-bottom: 0.4vw;
}

.author {
  color: #777;
  font-weight: 500;
}

.date {
  color: #999;
  font-style: italic;
  font-weight: 400;
}
</style>
