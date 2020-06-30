<template lang="pug">
  div
    component(:is="component" v-bind="{ ...config, type }")
</template>

<script>
import { computed } from "@vue/composition-api";

const DEFAULT_TYPE = "text";

const TYPES = {
	vuetify: {
		default: "v-text-field",
		"v-text-field": ["text", "string", "number", "email", "phone"],
		"v-select": ["select", "dropdown"]
	}
};

const NATIVE_TYPES = {
	number: ["phone"]
};

export default {
	name: "field",
	props: {
		library: {
			type: String,
			default: "vuetify"
		},
		config: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props) {
		const library = computed(() => props.library);

		const type = computed(() => props.config.type ?? DEFAULT_TYPE);

		const typesOfLibrary = computed(() => {
			return TYPES[library.value];
		});

		const typeExistsInLibrary = computed(() => {
			return Object.keys(typesOfLibrary.value).includes(type.value);
		});

		const component = computed(() => {
			let result = typesOfLibrary.value.default;

			Object.entries(typesOfLibrary.value).forEach(([key, value]) => {
				if (
					(Array.isArray(value) && value.includes(type.value)) ||
					value === type.value
				) {
					result = key;
				}
			});

			return result;
		});

		const nativeType = computed(() => {
			let result;

			Object.entries(NATIVE_TYPES).forEach(([key, value]) => {
				if (
					(Array.isArray(value) && value.includes(type.value)) ||
					value === type.value
				) {
					result = key;
				}
			});

			return result;
		});

		return { component, typeExistsInLibrary, type: nativeType };
	}
};
</script>

<style lang="scss" scoped>
</style>