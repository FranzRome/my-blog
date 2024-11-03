<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [StarterKit, TextStyle, Document, Paragraph, Text],
        autofocus: true,
        editable: true,
        injectCSS: false,
      }),
    }
  },

  mounted() {
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<template>
  <!-- TOOLBAR -->
  <section class="toolbar">
    <div class="toolbar-left">
      <div class="style-preset-dropdown">Heading 1 ▼</div>
    </div>
    <div class="toolbar-center">
      <button class="button bold" @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }">B</button>
      <button class="button italic" @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }">I</button>
      <!--button class="button underline" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">U</button-->
    </div>
    <div class="toolbar-right">
      <div class="font-size-container">
        <div class="font-size-minus" @click="decreaseFontSize"></div>
        <div class="font-size">{{ fontSize }}</div>
        <div class="font-size-plus" @click="increaseFontSize"></div>
      </div>
      <div class="button align-left"></div>
      <div class="button align-center"></div>
      <div class="button align-right"></div>
    </div>
  </section>
  <!-- CONTENT -->
  <editor-content :editor="editor" class="edit-section" />
</template>

<style scoped>
a {
  user-select: initial !important;
}

.toolbar {
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
}

.toolbar-left {
  display: flex;
  flex-direction: row;
}

.toolbar-center {
  display: flex;
  flex-direction: row;
  gap: 0.8vw;
}

.toolbar-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1vw
}

.style-preset-dropdown {
  border-radius: 18px;
  padding: 0.6vw 0.6vw;
  text-align: center;
  background-color: white;
}

.button {
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

.button:hover {
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.button-selected:hover {
  background-color: #BFBFBF;
}

.button-selected {
  background-color: #AEAEAE;
}

.bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

.underline {
  text-decoration: underline;
}

.attachment {
  background-image: url(../assets/attachment_icon.png);
  background-size: contain;
}

.color {
  border-radius: 50%;
  background: linear-gradient(#aaaaaa, black);
}

.font-size-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5vw;
}

.font-size {
  aspect-ratio: 5/4;
  width: 2.25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1.5px #757575;
  border-radius: 8px;
  font-size: 0.8vw;
  font-weight: 700;
  background-color: white;
}

.font-size-minus::before {
  aspect-ratio: 2/3;
  width: 1.3vw;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '-';
  font-size: 1vw;
  font-weight: 500;
  color: black;
  background-color: white;
  transition: 0.3s;
}

.font-size-plus::after {
  aspect-ratio: 2/3;
  width: 1.3vw;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '+';
  font-size: 1vw;
  font-weight: 500;
  color: black;
  background-color: white;
  transition: 0.3s;
}

.font-size-plus:hover {
  .font-size.plus::after {
    background-color: #757575;
  }
}

.align-left {
  background-image: url(../assets/align_left.png);
  background-size: contain;
}

.align-center {
  background-image: url(../assets/align_center.png);
  background-size: contain;
}

.align-right {
  background-image: url(../assets/align_right.png);
  background-size: contain;
}

.edit-section {
  position: relative;
  left: 50%;
  top: 8vw;
  transform: translate(-50%, 0);
  width: 60%;
  height: auto;
  z-index: -1;
  border-radius: 2vw;
  padding: 40px 6vw;
  background-color: #F5F5F5;
  cursor: text;
}
</style>