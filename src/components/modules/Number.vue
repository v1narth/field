<template lang="pug">
  div
    component(:is="component" v-bind="[props]")
</template>

<script>
import { computed } from "@vue/composition-api";
import { useField, props } from "@/composables/useField";

const COMPONENTS = {
	text: "v-text-field",
	slider: "v-slider",
	range: "v-range-slider"
};

export default {
	props,
	setup() {
		const { type } = useField();

		const component = computed(() => {
			return COMPONENTS[type.value] ?? COMPONENTS.text;
		});

		return { type, component };
	}
};
</script>

<style lang="scss" scoped>
</style>