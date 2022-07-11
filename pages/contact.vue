<template>
	<div class="contact-page">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h1 class="h2">Contact us</h1>
					<div class="text-holder">
						<p>Write us a message and we will contact you</p>
					</div>
					<ContactForm />
				</div>
			</div>
		</div>
		<div class="bg-img">
			<img src="@/assets/images/img-01.png" alt="phones" />
		</div>
	</div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
	components: {
		ContactForm
	}
};
</script>

<style lang="scss">
.contact-page {
	.input-group {
		.label {
			background: $dairy-cream;
		}
	}
}
</style>

<style lang="scss" scoped>
.contact-page {
	position: relative;
	padding-top: 8rem;
	padding-bottom: 10rem;
	background: $dairy-cream;
	overflow: hidden;

	@include media-breakpoint-down(md) {
		padding-top: 4rem;
	}

	.container {
		position: relative;
		z-index: 2;
	}

	.h2 {
		line-height: 1;
		margin-bottom: 2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.6rem;
		}
	}

	.text-holder {
		margin-bottom: 5.4rem;
		font-size: 2.4rem;

		@include media-breakpoint-down(md) {
			font-size: 2rem;
		}
	}

	.bg-img {
		position: absolute;
		right: 0;
		bottom: 0;

		@include media-breakpoint-down(md) {
			display: none;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
