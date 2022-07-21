<template>
	<div class="visual-section">
		<div class="container">
			<div class="row align-items-md-center">
				<div class="col-md-6 col-xl-7">
					<div class="img-holder">
						<picture>
							<source v-if="imgMob" :srcset="require(`@/assets/images/${imgMob}`)" media="(max-width: 768px)" />
							<img :src="require(`@/assets/images/${img}`)" :alt="title" />
						</picture>
					</div>
				</div>
				<div class="col-md-6 col-xl-5">
					<h2 class="h2">{{ title }}</h2>
					<Button v-if="btn.title" :title="btn.title" class="btn-dark-outline-title" :has-icon="true" type="nuxt-link" :to="btn.to" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "VisualSection",
	props: {
		img: {
			type: String,
			default: ""
		},
		imgMob: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		btn: {
			type: Object,
			default: () => ({})
		}
	},
	components: {
		Button
	}
};
</script>

<style lang="scss" scoped>
.visual-section {
	.container {
		max-width: 144rem;
	}

	.row {
		@include media-breakpoint-up(lg) {
			@include grid-gutter(8rem);
		}
	}

	.h2 {
		margin-bottom: 5rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 3.2rem;
		}
	}

	.img-holder {
		margin-left: -2.4rem;

		@include media-breakpoint-down(md) {
			margin-right: -2.4rem;
			margin-bottom: 3.3rem;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
