<script>
export default {
  name: 'BlogPostCard',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      state_content: this.content
    };
  },
  methods: {
    typeCharacter(event) {
      if(event.key.length == 1) {
         this.state_content += event.key;
      } else if(event.key === 'Backspace'){
         this.cancel();
      }
    },
    cancel() {
      this.state_content = this.state_content.slice(0, -1);
    }
  },
  mounted() {
    window.addEventListener('keydown', this.typeCharacter);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.typeCharacter);
  }
};
</script>

<template>
  <div>
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="style-preset-dropdown">Heading 1 ▼</div>
      </div>
      <div class="toolbar-center">
        <div class="button bold">B</div>
        <div class="button italic">I</div>
        <div class="button underline">U</div>
        <div class="button attachment"></div>
        <div class="button color"></div>
      </div>
      <div class="toolbar-right">
        <div class="button align-left"></div>
        <div class="button align-center"></div>
        <div class="button align-right"></div>
      </div>
    </div>
    <section class="edit-section">
      <p>{{ state_content }}</p>
    </section>
  </div>
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
   position: relative;
   left: 50%;
   top: 8vw;
   transform: translate(-50%, 0);
   width: 60%;
   height: 100vw;
   z-index: -1;
   border-radius: 2vw;
   padding: 40px 2vw;
   background-color: #F5F5F5;
}
</style>