<template lang="pug">
  div
    component(:is="component" v-bind="{...props, type}")
</template>

<script>
import { computed } from "@vue/composition-api";
import { useField, props } from "@/composables/useField";

const COMPONENTS = {
	text: "v-text-field",
	textarea: "v-textarea"
};

export default {
	props,
	setup() {
		const { type } = useField();

		const component = computed(() => {
			return COMPONENTS[type.value] ?? COMPONENTS.text;
		});

		return { component, type };
	}
};
</script>

<style lang="scss" scoped>
</style>