<script>
import BlogPostCard from './BlogPostCard.vue';
import BaseButton from './BaseButton.vue';
import posts from '../../public/data/posts.json';
import '../assets/style.css'

export default {
  name: 'BlogHome',
  components: {
    BlogPostCard,
    BaseButton
  },
  data() {
    return {
      posts: posts
    };
  }
};
</script>

<template>
  <div>
    <!--SIDE BAR-->>
    <section class="image-section w3-quarter w3-fixed w3-padding-small foreground separator">
      <!--IMAGE/AVATAR-->
      <div style="position: relative; height: 200px">
        <img src="../assets/avatar.jpg" class="avatar w3-circle" alt="My Profile Picture"
          style="border-width: 3px !important; transition:0.3s" draggable="false">
        <img src="avatar2.webp" class="secondary-avatar w3-circle " alt="My Profile Picture"
          style="border-width: 3px !important; transition:0.3s" draggable="false">
      </div>

      <!--SOCIAL LINKS-->
      <div style="display: flex; flex-direction: row; justify-content:center;">
        <div class="w3-container w3-cell-center w3-margin-top w3-padding-small">
          <a class="icon-link w3-text-sand w3-hover-text-orange"
            href="https://www.linkedin.com/in/francesco-romeo-446b96141/" target="_blank" draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-linkedin linkedin-icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <div class="w3-container w3-cell-center w3-margin-top w3-padding-small">
          <a class="icon-link w3-text-sand w3-hover-text-orange" href="https://github.com/FranzRome" target="_blank"
            draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-github github-icon">
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </section>
    <div class="w3-threequarter w3-right content">
      <nav class="nav">
        <div>
          <a href="https://franzrome.github.io/" class="back-link">
            <img src="../assets/arrow_back.svg" class="back-arrow"> Home
          </a>
        </div>
        <div>
          <h1>Blog</h1>
        </div>
        <div>
          <router-link :to="'/editor'">
            <BaseButton :text="'Editor'"/>
          </router-link>
        </div>
      </nav>
      <div class="posts-container">
        <BlogPostCard v-for="post in posts" :key="post.id" :post="post" class="post" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.separator {
  border-right: 3px solid #FF9800;
}

.nav {
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: #ffff;
  color: #111;
}

.nav div {
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.back-link {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 0;
  font-size: 1.2vw;
  text-decoration: none;
  transition: .3s;
}

.back-link:hover {
  gap: 0.5vw
}

.back-arrow {
  height: 40px;
}

.content {
  background-color: #eee;
  height: 100vh;
}

.posts-container {
  display: flex;
  flex-direction: row;
  gap: 1.8vw;
  padding: 0 4vw;
}
</style>
