<template>
	<div class="login-wrapper">
		<div class="bg-pic">
			<img src="static/images/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg">
		</div>

		<div class="login-container bg-white">
			<div class="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
				<h1>iORDER</h1>
				<p>Entre na sua pagina do iORDER</p>
				<v-text-field
	              	name="input-1"
	              	label="Nome de usuario"
	              	id="testing"
	            >
            	</v-text-field>
            	<v-text-field
	              name="input-10-1"
	              label="Senha"
	              hint="Digite as credenciais"
	              v-model="password"
	              type="password"
            	></v-text-field>

            	<v-btn dark flat class="btnPurple">Entrar</v-btn>
			</div>	

			<div class="pull-bottom">
				<div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
					<div class="col-sm-9 no-padding m-t-10">
						<p>
							dsa
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>