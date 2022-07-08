<template>
	<div class="contact-section">
		<div class="form-holder">
			<div class="container">
				<div class="row">
					<div class="col-lg-5">
						<h2 class="h2 text-center text-md-start">Let’s <br class="d-none d-md-block" />start now!</h2>
						<div class="text-holder text-center text-md-start">
							<p>
								Write us a message and we <br />
								will contact you
							</p>
						</div>
					</div>
					<div class="col-lg-7 d-flex justify-content-lg-end">
						<ContactForm class="input-label-style-1" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
	name: "ContactSection",
	components: {
		ContactForm
	}
};
</script>

<style lang="scss" scoped>
.contact-section {
	.form-holder {
		width: 100%;
		max-width: 128rem;
		margin: auto;
		padding-top: 10.7rem;
		padding-bottom: 12.3rem;
		background: $wild-sand;

		@include media-breakpoint-up(xl) {
			padding-right: 6rem;
			padding-left: 6rem;
		}

		@include media-breakpoint-down(md) {
			padding-top: 6rem;
			padding-bottom: 7rem;
		}
	}

	.h2 {
		margin-bottom: 2.8rem;
		text-transform: uppercase;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.8rem;
		}
	}

	.text-holder {
		@include media-breakpoint-down(lg) {
			margin-bottom: 5rem;
		}
	}

	.contact-form {
		width: 100%;
		max-width: 63rem;
	}
}
</style>
