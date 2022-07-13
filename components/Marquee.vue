<template>
	<div class="marquee">
		<client-only>
			<template v-if="up_md">
				<dynamic-marquee class="marquee-holder" :direction="'row'" :repeat-margin="20" :hover-pause="false">
					<h2><slot /></h2>
				</dynamic-marquee>
			</template>
			<template v-else
				><h2><slot /></h2
			></template>
		</client-only>
	</div>
</template>

<script>
import DynamicMarquee from "vue-dynamic-marquee";
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
	name: "Marquee",
	components: {
		DynamicMarquee
	},
	props: {
		title: {
			type: String,
			default: "Marquee title",
			require: false
		}
	},
	mixins: [getterBreakpoints]
};
</script>

<style lang="scss">
.marquee {
	h2 {
		span {
			color: $black;
			-webkit-text-stroke: unset;
		}
	}
}
</style>

<style lang="scss" scoped>
.marquee {
	padding-top: 14rem;
	padding-bottom: 18rem;

	@include media-breakpoint-down(md) {
		padding-top: 14rem;
		padding-bottom: 14rem;
	}

	.marquee-holder {
		@include media-breakpoint-up(md) {
			min-height: 21rem;
		}
	}

	h2 {
		font-family: $big-shoulders-display;
		font-size: 17rem;
		line-height: 1.48;
		color: transparent;
		-webkit-text-stroke: 0.1rem $black;

		@include media-breakpoint-up(md) {
			white-space: nowrap;
		}

		@include media-breakpoint-down(md) {
			font-size: 7.2rem;
			text-align: center;
			line-height: 1.2;
		}
	}
}
</style>
