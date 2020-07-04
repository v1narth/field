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
				<Field :config="config" class="pt-9" />
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
		config: {
			type: "string",
			typeConfig: {
				// type: "slider"
			},
			rules: {
				// min: 1,
				max: 6,
				required: true
			},
			disabled: false,
			// value: [1, 2],
			hint: "Field hint",
			persistentHint: true,
			label: "Field Label",
			placeholder: "Field Placeholder",
			// prependInnerIcon: "mdi-map-marker",
			color: "secondary",
			thumbLabel: true,
			thumbColor: "yellow",
			ticks: true,
			min: 1,
			max: 3,
			tickSize: 2,
			tickLabels: ["First tick", "Second tick"],
			items: [
				{
					customText: "my custom text",
					customValue: "my custom value"
				}
			],
			// clearIcon: "mdi-map-marker",
			itemText: "customText",
			itemValue: "customValue",
			clearable: true,
			filled: true
		}
	})
};
</script>
