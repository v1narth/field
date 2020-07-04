<template lang="pug">
  div
    component(:is="fieldModule" v-bind="{props}" )
</template>

<script>
import { computed, provide } from "@vue/composition-api";

export default {
	components: {
		String: () => import("./modules/String"),
		Number: () => import("./modules/Number"),
		Array: () => import("./modules/Array")
	},
	props: {
		type: {
			type: String,
			default: "string"
		},
		config: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props) {
		provide(
			"type",
			computed(() => props.config.typeConfig.type ?? props.config.type)
		);

		const fieldModule = computed(() => {
			// Field module discover logic
			return props.config.type;
		});

		const rules = [
			v =>
				props.config.rules?.required
					? !!v || "The field is required"
					: true,
			v => {
				let result = true;
				let value = v?.length;

				if (props.type === "number") {
					value = v;
				}

				if (v && props.config.rules) {
					const { min, max } = props.config.rules;

					if (min) {
						result =
							value >= min ||
							`Field required minimum ${min} characters.`;
					}

					if (max) {
						result =
							value <= max ||
							`Field required maximum ${max} characters.`;
					}

					if (min && max) {
						result =
							(value <= max && value >= min) ||
							`This field must be between ${min} - ${max} characters.`;
					}
				}

				return result;
			}
		];

		return {
			fieldModule,
			props: { ...props.config, rules }
		};
	}
};
</script>

<style lang="scss" scoped>
</style>