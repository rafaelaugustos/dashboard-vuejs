<template>
	<div>
		<nav class="page-sidebar">
			<div class="sidebar-header"></div>
			<div class="sidebar-menu">
				<div class="scroll-wrapper menu-items">
					<ul class="menu-items scroll-content scroll-scrolly_visible" style="height: auto; margin-bottom: 0px; margin-right: 0px; max-height: 90px;">
						<li class="m-t-30">
							<span class="bg-success icon-thumbnail">
								<icon name="home" scale="1.3" color="white"></icon>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<section class="header">
			<div class="pull-left">
				<div class="header-inner">
					<div class="brand inline">
						<img src="../../../static/images/restaurante.jpg">
					</div>
					<ul class="notification-list no-margin hidden-sm hidden-xs b-grey b-l b-r no-style p-l-30 p-r-20">
						<li class="p-r-15 inline"><icon scale="1.3" name="globe"></icon><span class="bubble"></span></li>
						<li class="p-r-15 inline"><icon scale="1.1" name="link"></icon></li>
						<li class="p-r-15 inline"><icon scale="1.1" name="th-large"></icon></li>
					</ul>
				</div>
			</div>
			<div class="pull-right">
				<div class="profileInfo">
					<div class="pull-left name-profile">
						Rafael Augusto
					</div>	
					<div class="image-profile pull-right">
						<img src="../../../static/images/rafael.jpg">
					</div>
				</div>
			</div>	
		</section>
	</div>	
</template>

<style>
	ul li{
	    list-style: none !important;
	}
	
	.m-t-30 {
	    margin-top: 30px;
	}

	.bg-success {
	    background-color: #10cfbd !important;
	    color: #FFF;
	}
	
	.page-sidebar .sidebar-header {
	    display: block;
	    height: 60px;
	    line-height: 60px;
	    background-color: #272b35;
	    border-bottom: 1px solid #232730;
	    color: #ffffff;
	    width: 100%;
	    padding: 0 20px;
	    padding-left: 30px;
	    clear: both;
	    z-index: 10;
	    position: relative;
	}
	.icon-thumbnail {
	    display: inline-block;
	    background: #21252d;
	    height: 40px;
	    width: 40px;
	    line-height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    position: relative;
	    left: 0;
	    float: right;
	    margin-right: 14px;
	    color: #788195;
	    font-size: 16px;
	    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.05,0.74,0.27,0.99);
	    transition: transform 0.4s cubic-bezier(0.05,0.74,0.27,0.99);
	    -webkit-backface-visibility: hidden;
	    -webkit-perspective: 1000;
	    font-family: "Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-size-adjust: 100%;
	    -ms-text-size-adjust: 100%;
	    font-weight: bold;
	}

	.page-sidebar{
		width: 280px;
	    background-color: #2b303b;
	    z-index: 1000;
	    left: -210px;
	    position: fixed;
	    bottom: 0;
	    top: 0;
	    right: auto;
	    overflow: hidden;
	    -webkit-transition: -webkit-transform 400ms cubic-bezier(0.05,0.74,0.27,0.99);
	    -moz-transition: -moz-transform 400ms cubic-bezier(0.05,0.74,0.27,0.99);
	    -o-transition: -o-transform 400ms cubic-bezier(0.05,0.74,0.27,0.99);
	    transition: transform 400ms cubic-bezier(0.05,0.74,0.27,0.99);
	    -webkit-backface-visibility: hidden;
	    -webkit-perspective: 1000;
	}
	
	.page-sidebar .sidebar-menu {
	    height: calc(100% - 50px);
	    position: relative;
	    width: 100%;
	}

	.page-sidebar .sidebar-menu .menu-items {
	    list-style: none;
	    margin: 0;
	    padding: 0;
	    position: relative;
	    height: calc(100% - 10px);
	    width: 100%;
	}

	.scroll-wrapper {
	    overflow: hidden!important;
	    padding: 0!important;
	    position: relative;
	}



	.inline {
	    display: inline-block!important;
	}

	.header .bubble{
		border-radius: 100%;
	    height: 12px;
	    width: 12px;
	    background-color: rgba(226,32,91,0.77);
	    color: #ffffff;
	    position: relative;
	    top: -2px;
	    float: right;
	    margin-left: -7px;
	}

	.image-profile{
		width: 30px;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
	}

	.profileInfo{
		margin-top: 15px;
	}
	
	.name-profile{
		margin-right: 10px;
		margin-top: 5px;
	}

	.header{
	    width: 100%;
	    position: fixed;
	    left: 0;
	    top: 0;
	    height: 60px;
	    padding: 0 20px 0 50px;
	    z-index: 800;
	    background: #FFF;
	    border-bottom: 1px solid rgba(230,230,230,0.7);
	}

	.header .pull-left, .header .pull-right {
	    z-index: 10;
	    position: relative;
	}

	.pull-right {
	    float: right!important;
	}

	.header .pull-left{
		z-index: 10;
		position: relative;
		float: left;
	}

	.header .header-inner{
	    height: 60px;
	    width: 100%;
	    vertical-align: middle;
	    display: table-cell;
	}

	.header .header-inner ul{
		margin-top: 20px;
		height: 25px;
		padding-top: 5px;
	}

	
	.header .brand{
	    vertical-align: middle;
	    width: 200px;
	    float: left;
	    text-align: center;
	}

	.header .brand img{ 
		max-width: 110px;
	}

	.header .notification-list {
	    display: inline-block;
	}

	.p-l-30 {
	    padding-left: 30px!important;
	}

	.p-r-20 {
	    padding-right: 20px!important;
	}

	ul.no-style, ol.no-style {
	    padding-left: 5px;
	}

	.b-a, .b-r, .b-l, .b-t, .b-b {
	    border-style: solid;
	    border-width: 0;
	}

	.p-r-20 {
	    padding-right: 20px!important;
	}

	.b-grey {
	    border-color: #e6e6e6;
	}

	.b-l {
	    border-left-width: 1px !important;
	}

	.b-r {
	    border-right-width: 1px !important;
	}
	
	.p-r-15 {
	    padding-right: 15px!important;
	}
	
</style>