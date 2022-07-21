<template>
	<transition name="fade">
		<div v-if="isShow" class="cookies">
			<div class="inner-holder">
				<a href="#" class="icon-close" @click.prevent="close">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.40002 6.40002L25.2 25.2" stroke="black" stroke-width="0.8" />
						<path d="M25.2 6.40002L6.40001 25.2" stroke="black" stroke-width="0.8" />
					</svg>
				</a>
				<div class="row g-0">
					<div class="col-md-7">
						<div class="title-holder">
							<div class="icon-holder">
								<img src="@/assets/images/icon-01.svg" alt="icon cookies" />
							</div>
							<h3 class="h3">We use cookies</h3>
						</div>
						<div class="text-holder">
							<p>This website uses cookies to ensure you get the best expierence on our website.</p>
						</div>
					</div>
					<div class="col-md-5 d-md-flex align-items-md-end justify-content-md-end">
						<Button title="Accept" class="btn-dark" type="button" @click="accept" />
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "Cookies",
	components: {
		Button
	},
	data() {
		return {
			isShow: false
		};
	},
	mounted() {
		// localStorage.clear();

		const cookies = localStorage.getItem("cookiesAceept");

		if (cookies === true) {
			this.isShow = false;
		} else if (!cookies) {
			this.isShow = true;
		}
	},
	methods: {
		accept() {
			localStorage.setItem("cookiesAceept", true);

			this.isShow = false;
		},
		close() {
			this.isShow = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.cookies {
	@include media-breakpoint-down(md) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba($black, 0.25);
		z-index: 100;
	}

	.inner-holder {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		max-width: 100rem;
		padding: 5rem 3rem 5rem 3rem;
		font-size: 2rem;
		color: $black;
		z-index: 100;
		background: $wild-sand;

		@include media-breakpoint-up(md) {
			width: 100%;
			left: 50%;
			transform: translateX(-50%);
			bottom: 4rem;
			padding: 6rem 5rem;
		}

		@include media-breakpoint-down(xl) {
			bottom: 0;
		}

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}
	}

	.h3 {
		margin-bottom: 0;
		font-size: 5.2rem;
		line-height: 1;

		@include media-breakpoint-down(md) {
			margin-bottom: 0;
			font-size: 3.6rem;
		}
	}

	.title-holder {
		display: flex;
		align-items: flex-end;
		margin-bottom: 3.7rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}

		.icon-holder {
			margin-right: 2.4rem;
			width: 4.4rem;

			@include media-breakpoint-down(md) {
				width: 3.9rem;
				margin-right: 2rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.text-holder {
		font-size: 2rem;
		line-height: 1.3;

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
			margin-bottom: 2.8rem;
		}
	}

	.btn {
		width: 100%;
		max-width: 22rem;

		@include media-breakpoint-down(sm) {
			max-width: 100%;
		}
	}

	.icon-close {
		position: absolute;
		top: 5rem;
		right: 5rem;

		@include media-breakpoint-down(md) {
			top: 2rem;
			right: 2rem;
		}
	}
}
</style>
