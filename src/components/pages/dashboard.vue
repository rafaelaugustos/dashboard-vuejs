<template>
	<div>
		<Topo />
		<div class="page-content-wrapper">
			<div class="content sm-gutter">
				<div class="container-fluid padding-25 sm-padding-10">
					dsa
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.page-content-wrapper{
	    min-height: 100%;
    	position: relative;
    }

    .page-content-wrapper .content{
    	z-index: 10;
	    padding-top: 60px;
	    padding-bottom: 72px;
	    min-height: 100%;
	    -webkit-transition: all 0.3s ease;
	    transition: all 0.3s ease;
    }

    .padding-25 {
	    padding: 25px!important;
	}

	.container-fluid {
	    padding-left: 30px;
	    padding-right: 30px;
	}
</style>
<script>
	import Topo from '../components/Header'
	export default{
		components: {
			Topo
		}
	}
</script>