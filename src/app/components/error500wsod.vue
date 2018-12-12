<template>
	<div class="blog">
		<h1>{{title}}</h1>
	<div>
  <b-card title="White Screen of Death"
          img-src="./assets/wp-wsod-chrome.png"
          img-alt="WSOD"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Where is the site experiencing this error?
    </p>
    <b-button href="#" variant="primary">Front of Site</b-button>
		<b-button href="#" variant="primary">wp-admin</b-button>
  </b-card>
</div>
	</div>
</template>
<script>
	export default{
		name:'error500wsod',
		data (){
			return{
				title:'Error 500 WSOD'
			}
		}
	}
</script>

<style scoped>

</style>
