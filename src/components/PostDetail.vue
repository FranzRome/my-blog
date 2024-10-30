<script>
import axios from 'axios';

export default {
  name: 'PostDetail',
  props: ['id'],
  data() {
    return {
      post: null
    };
  },
  created() {
    axios.get('/data/posts.json')
      .then(response => {
        this.post = response.data.find(post => post.id === parseInt(this.id));
      });
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
  <div class="background">
    <div v-if="post" class="post">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <span class="author">{{ post.author }}</span>
        <span class="date">{{ formatDate(post.date) }}</span>
      </div>
      <div v-for="(c, index) in post.content" :key="index">
        <h1 v-if="c.tag === 'h1'">
          {{c.content}}
        </h1>
        <h2 v-if="c.tag === 'h2'">
          {{c.content}}
        </h2>
        <h3 v-if="c.tag === 'h3'">
          {{c.content}}
        </h3>
        <p v-if="c.tag === 'p'">
          {{c.content}}
        </p>
        <a v-if="c.tag === 'a'" :href="c.href" target="_blank">
          {{c.content}}
        </a>
        <br v-if="c.tag === 'br'"/>
        <img v-if="c.tag === 'img'" :src="c.content" :width="c.width" :height="c.height"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
div{
  width:auto;
}

.background {
  background-color: #ffc107
}

.post {
  width: 60vw;
  margin: auto;
  padding: 30px 4vw;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 12px 12px rgba(0,0,0,0.3);
}

.meta {
  color: #777;
  font-size: 0.9em;
  margin-bottom: 20px;
}

.author {
  font-weight: bold;
}

.date {
  font-style: italic;
}
</style>
