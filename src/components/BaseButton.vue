<script>
   export default {
      name: 'BaseButton',
      components:{},
      props:{
         text:{
            type: String,
            Required: false
         }
      },
      methods:{
         onClick(){
            return
         }
      }
   }
</script>

<template>
   <button>{{text}}</button>
</template>

<style scoped>

</style>