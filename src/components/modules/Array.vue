<template lang="pug">
  div
    v-select(v-bind="[props]" )
</template>

<script>
import {} from "@vue/composition-api";
import { useField, props } from "@/composables/useField";

export default {
	props,
	setup() {
		const { type } = useField();

		return { type };
	}
};
</script>

<style lang="scss" scoped>
</style>