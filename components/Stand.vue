<template>
	<div class="stand">
		<div class="container">
			<div class="stand__wrapper d-flex align-items-xl-center">
				<div class="stand__img-wrapp">
					<h2 class="h2 stand__title">
						{{ title1 }}
					</h2>
					<picture class="stand-img">
						<source :srcset="require(`@/assets/imgs/${imgMob}`)" media="(max-width: 767px)" />
						<img :src="require(`@/assets/imgs/${img}`)" alt="img" />
					</picture>
				</div>
				<div class="stand__content-holder">
					<h2 class="h2 stand__title2">
						{{ title2 }}
					</h2>
					<Button v-if="btn.title && up_md" :title="btn.title" class="btn-dark" :has-icon="true" type="nuxt-link" :to="btn.to" />
					<Button v-if="btn.title && !up_md" :title="btn.title" class="btn-dark" :has-icon="true" type="nuxt-link" :to="btn.to" />
				</div>
			</div>
			<div v-if="text" class="stand__text-holder">
				<p>{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
	name: "Stand",
	props: {
		title1: {
			type: String,
			default: ""
		},
		title2: {
			type: String,
			default: "description"
		},

		img: {
			type: String,
			default: "career-stand.png"
		},
		imgMob: {
			type: String,
			default: "career-stand-mb.png"
		},
		btn: {
			type: Object,
			default: () => ({})
		},
		text: {
			type: String,
			default: "",
			require: false
		}
	},
	components: {
		Button
	},
	mixins: [getterBreakpoints]
};
</script>

<style lang="scss" scoped>
.stand {
	padding: 15rem 0 0;
	overflow: hidden;
	@include media-breakpoint-down(xl) {
		padding-top: 8rem;
		.stand__img-wrapp {
			display: flex;
			flex-direction: column-reverse;
		}
		.stand__wrapper {
			display: flex;
			flex-direction: column;
		}
	}
	.stand__title {
		margin-bottom: -5rem;
		@include media-breakpoint-down(xl) {
			margin-bottom: 0;
		}
	}
	.stand__title2 {
		max-width: 464px;
	}
	&__content-holder {
		@include media-breakpoint-up(xl) {
			margin-left: -14rem;
			margin-bottom: -9.5rem;
		}
	}
	.stand-img {
		z-index: -1;
		position: relative;
		@include media-breakpoint-down(xl) {
			position: unset;
			margin-bottom: 4rem;
			margin-left: -2rem;
			margin-right: -2rem;
		}
		img {
			width: 100%;
			height: auto;
		}
	}

	&__text-holder {
		padding-top: 2.7rem;
		font-size: 2rem;
		line-height: 1.9;
		@include media-breakpoint-up(xl) {
			max-width: 57.3rem;
			padding-top: 4rem;
			font-size: 2.4rem;
			line-height: 1.7;
		}
	}

	.btn {
		margin-top: 2.2rem;
		@include media-breakpoint-up(xl) {
			margin-top: 5rem;
		}
	}
	&.style2 {
		.stand__content-holder {
			@include media-breakpoint-up(xl) {
				margin-left: 10rem;
				margin-bottom: 0rem;
				max-width: 55.7rem;
			}
		}
		.container {
			max-width: 1440px;
			@include media-breakpoint-up(xl) {
				padding-left: 0;
			}
		}
	}

	&.style3 {
		@include media-breakpoint-down(md) {
			padding-top: 1rem;
		}

		.stand__content-holder {
			@include media-breakpoint-up(xl) {
				position: relative;
				left: -3.1rem;
			}
		}
	}
}
</style>
