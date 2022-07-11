<template>
	<div class="home-page">
		<div class="text-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<h2 class="h2">Your business and our Hands Republic</h2>
					</div>
					<div class="col-lg-6">
						<div class="text-holder d-none d-md-block">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div class="text-holder d-md-none">
							<p>We champion small businesses in the digital world and have over 1,700 localised experts to help you spread your reach.</p>
						</div>
						<Button title="Our company" class="btn-dark d-md-none" :has-icon="true" type="button" />
					</div>
				</div>
			</div>
		</div>
		<div class="section-labels-card">
			<div class="container">
				<div class="row justify-content-center">
					<div v-for="(item, index) in labelsList" :key="index" class="col-md-6 col-lg-5 col-xl-4">
						<LabelCard :card="item" />
					</div>
				</div>
			</div>
		</div>
		<QuoteSection text="To see all the cross-functional teaming that has led to developing exceptional team.blue products and enduring relationships makes me extremely proud." name="Jacob Nijholt" position="Chief Product Owner" img="img-01.jpg" img-mob="img-01.jpg" />
		<ContactSection />
	</div>
</template>

<script>
import ContactSection from "@/components/ContactSection";
import Button from "@/components/Button";
import LabelCard from "@/components/LabelCard";
import Labels from "@/constants/labels";
import QuoteSection from "@/components/QuoteSection";

export default {
	components: {
		ContactSection,
		Button,
		LabelCard,
		QuoteSection
	},
	data() {
		return {
			labelsList: []
		};
	},
	created() {
		this.labelsList = Labels;
	}
};
</script>

<style lang="scss" scoped>
.home-page {
	.text-section {
		padding-top: 22.6rem;
		padding-bottom: 22.5rem;

		.h2 {
			@include media-breakpoint-down(lg) {
				margin-bottom: 3.2rem;
			}
		}

		.text-holder {
			font-size: 2.4rem;
			line-height: 1.7;

			@include media-breakpoint-down(md) {
				margin-bottom: 3.2rem;
				font-size: 2rem;
			}

			p {
				&:not(:last-child) {
					@include media-breakpoint-up(lg) {
						margin-bottom: 6rem;
					}
				}
			}
		}
	}

	.section-labels-card {
		padding-bottom: 6rem;

		@include media-breakpoint-down(md) {
			padding-bottom: 4rem;
		}

		div[class^="col-"] {
			&:nth-child(2) {
				@include media-breakpoint-up(xl) {
					padding-top: 4rem;
				}
			}
		}
	}
}
</style>
