
<template>
    <!--<div id = "test" class="checks" @click="toggleClassTest();">  
        
    </div>  -->
    <div class="checks">
    	 <input type="checkbox" class="checks" v-model="checkedNames">
    </div>
 
</template>

<script>
  export default {
    components: {
    },
    
    
    data () {
      return {
        checkedNames: "",
//      checked

      }
    },
    methods: {
}
  }
</script>

<style scoped>
	.checks{
		float: left;
		margin: 20px 5px;
	}
input[type="checkbox"] {
 width: 15px;
 height: 15px;
}
</style>
