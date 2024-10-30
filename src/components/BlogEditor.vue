<script>

export default {
  name: 'BlogPostCard',
  props: {
    blogData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      content: '',
      isBold: false,
      isItalic: false,
      isUnderline: false
    };
  },
  methods: {
    typeCharacter(event) {
      if (event.key.length === 1) {
        let char = event.key;
        if (this.isBold) char = `<b>${char}</b>`;
        if (this.isItalic) char = `<i>${char}</i>`;
        if (this.isUnderline) char = `<u>${char}</u>`;
        
        this.content += char;
      } else if (event.key === 'Enter') {
         this.content += '<br>';
      } else if (event.key === 'Backspace') {
        this.cancel();
      }
    },
    cancel() {
      this.content = this.content.slice(0, -1);
    },
    toggleBold() {
      this.isBold = !this.isBold;
    },
    toggleItalic() {
      this.isItalic = !this.isItalic;
    },
    toggleUnderline() {
      this.isUnderline = !this.isUnderline;
    },
    fetchContent() {
      this.content = this.blogData.content.map((item) => {
        if (item.tag === 'img') {
          return `<img src="${item.content}" width="${item.width}" />`;
        } else if (item.tag === 'a') {
          return `<a href="${item.href}">${item.content}</a>`;
        } else {
          return `<${item.tag}>${item.content || ''}</${item.tag}>`;
        }
      }).join('');
    },
  },
  mounted() {
   this.fetchContent();
    window.addEventListener('keydown', this.typeCharacter);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.typeCharacter);
  }
};
</script>

<template>
    <!-- TOOLBAR -->>
    <section class="toolbar">
      <div class="toolbar-left">
        <div class="style-preset-dropdown">Heading 1 ▼</div>
      </div>
      <div class="toolbar-center">
        <div class="button bold" @click="toggleBold">B</div>
        <div class="button italic" @click="toggleItalic">I</div>
        <div class="button underline" @click="toggleUnderline">U</div>
      </div>
      <div class="toolbar-right">
        <div class="button align-left"></div>
        <div class="button align-center"></div>
        <div class="button align-right"></div>
      </div>
    </section>
    <!-- CONTENT -->
    <section class="edit-section">
      <div v-html="content"></div>
    </section>
</template>

<style scoped>

.toolbar{
   position: fixed;
   top: 2vw;
   left: 50%;
   transform: translate(-50%, 0);
   padding: 0.8vw 1.4vw;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 2vw;
   border-radius: 12px;
   box-shadow: 0 4px 12px rgba(0,0,0,0.1);
   background-color: #FCFCFC;
}

.toolbar-left{
   display: flex;
   flex-direction: row;
}

.toolbar-center{
   display: flex;
   flex-direction: row;
   gap: 0.8vw;
}

.toolbar-right{
   display: flex;
   flex-direction: row;
   gap: 1vw
}

.style-preset-dropdown{
   border-radius: 18px;
   padding: 0.6vw 0.6vw;
   text-align: center;
   background-color: white;
}

.button{
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 18px;
   aspect-ratio: 1/1;
   width: 2vw;
   border-radius: 8px;
   background-color: #FAFAFA;
   transition: 0.2s;
}

.button:hover{
   background-color: white;
   box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
}

.bold{
   font-weight: 700;
}

.italic{
   font-style: italic;
}

.underline{
   text-decoration: underline;
}

.attachment{
   background-image: url(../assets/attachment_icon.png);
   background-size: contain;
}

.color {
   border-radius: 50%;
   background: linear-gradient(#aaaaaa, black);
}

.align-left{
   background-image: url(../assets/align_left.png);
   background-size: contain;
}

.align-center{
   background-image: url(../assets/align_center.png);
   background-size: contain;
}

.align-right{
   background-image: url(../assets/align_right.png);
   background-size: contain;
}

.edit-section{
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   position: relative;
   left: 50%;
   top: 8vw;
   transform: translate(-50%, 0);
   width: 60%;
   height: 100vw;
   z-index: -1;
   border-radius: 2vw;
   padding: 40px 6vw;
   background-color: #F5F5F5;
}
</style>