<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-spacer></v-spacer>

			<v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
				<Field :config="textFieldConfig" />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Field from "./components/Field";

export default {
	name: "App",

	components: {
		Field
	},

	data: () => ({
		textFieldConfig: {
			type: "phone",
			label: "Beautiful label",
			placeholder: "My placeholder"
		}
	})
};
</script>
