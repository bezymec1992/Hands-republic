<template>
	<div>
		<main-slot>
			<div class="container">
				<div class="flex-column-reverse flex-lg-row row">
					<div class="intro__title-wrapp col-12 col-lg-5">
						<h1 class="h1 intro__title">JURIDISCHE HANDJES</h1>
						<p class="inro__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<Button title="Visit  website" class="btn-white-outline-title" :has-icon="true" type="button" />
					</div>
					<div class="col-12 col-lg-7">
						<div class="intro-img">
							<picture class="intro__picture">
								<source srcset="@/assets/imgs/jur-intro-mb.png" media="(max-width: 992px)" />
								<img src="@/assets/imgs/jur-intro-desk.png" alt="MDN" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</main-slot>
		<InfoWrapper title="business idea" class="style2" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit." img="jur-idea-desk.jpg" imgMob="jur-idea-mb.jpg" />
		<Marquee>
			MASTER STUDENTS <br class="d-md-none" />
			<span>LAW HELP </span>
		</Marquee>
		<Stand class="style2" title2="A good start for students" :btn="{ title: 'Visit website', to: '/' }" img="jur-girl-desk.jpg" img-mob="jur-girl-mb.jpg" />
		<div class="benefit">
			<div class="container">
				<div class="benefit__wrapper row px-4 justify-content-around">
					<div class="benefit__block col-12 col-lg-6">
						<h3 class="h3 benefit__title">Benefits for business</h3>
						<ul class="benefit__items">
							<li class="benefit__item">Favorable cost</li>
							<li class="benefit__item">Quality of services</li>
							<li class="benefit__item">Save your time</li>
							<li class="benefit__item">Quality of services</li>
						</ul>
					</div>
					<div class="benefit__block col-12 col-lg-6">
						<h3 class="h3 benefit__title">Benefits for students</h3>
						<ul class="benefit__items">
							<li class="benefit__item">Career start</li>
							<li class="benefit__item">Experience</li>
							<li class="benefit__item">The first customers</li>
							<li class="benefit__item">Flexible schedule</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<BlockSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit." img="laptop-desk.jpg" img-mob="laptop-mb.jpg">
			<template #title>
				additional info <br />
				about the product
			</template>
		</BlockSection>
		<div class="section-labels-card">
			<div class="container">
				<h2 class="h2 labels-card-title">Discover other labels</h2>
				<div class="row">
					<div v-for="(item, index) in labelsList" :key="index" class="col-md-6 col-lg-5 col-xl-4">
						<LabelCard :card="item" />
					</div>
				</div>
			</div>
		</div>
		<contact-section />
	</div>
</template>

<script>
import InfoWrapper from "@/components/InfoWrapper";
import Marquee from "@/components/Marquee";
import ContactSection from "@/components/ContactSection";
import LabelCard from "@/components/LabelCard";
import Labels from "@/constants/labels";
import BlockSection from "@/components/BlockSection";
import showOtherLabels from "@/mixins/showOtherLabels";

export default {
	components: {
		InfoWrapper,
		Marquee,
		BlockSection,
		LabelCard,
		ContactSection
	},
	mixins: [showOtherLabels],
	data() {
		return {
			labelsList: []
		};
	},
	created() {
		this.showLabels(Labels, "Juridische Handjes", this.labelsList);
	}
};
</script>

<style lang="scss" scoped>
.intro-section {
	background: #dd2424;
	position: relative;
	overflow: hidden;
	padding: 29px 0;
	margin-bottom: 180px;
	@include media-breakpoint-down(lg) {
		margin-bottom: 60px;
	}
	.intro__title-wrapp {
		color: white;
		margin-top: 135px;
		@include media-breakpoint-down(lg) {
			margin-top: 0;
			padding-bottom: 0;
		}
		.intro__title {
			padding-bottom: 24px;
		}
		.inro__text {
			font-size: 24px;
			line-height: 43px;
			max-width: 430px;
			margin-bottom: 30px;
		}
	}
	.intro-img {
		@include media-breakpoint-up(lg) {
			position: absolute;
			height: 100%;
			width: 100rem;
			right: -10%;
			top: 145px;
		}
		@include media-breakpoint-down(lg) {
			margin-left: -2rem;
			margin-right: -2rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
.marquee {
	padding-top: 0;

	@include media-breakpoint-down(md) {
		padding-bottom: 9rem;
	}
}
.wrap {
	padding-top: 0;
}
.stand {
	padding-top: 0;
	@include media-breakpoint-down(xl) {
		padding-bottom: 13rem;
	}
}
.benefit {
	padding-bottom: 15rem;
	@include media-breakpoint-down(xl) {
		padding-bottom: 4rem;
	}

	@include media-breakpoint-up(md) {
		padding-top: 20rem;
	}

	.benefit__block {
		border: 0.2rem solid gray;
		width: 56rem;
		max-width: 100%;
		padding: 0 9rem 9.5rem;
		@include media-breakpoint-down(xl) {
			margin-bottom: 10.5rem;
		}
		@include media-breakpoint-down(md) {
			padding: 0 0 6rem;
		}
		.benefit__title {
			font-size: 5.8rem;
			line-height: 7rem;
			text-align: center;
			text-transform: uppercase;
			margin-top: -5.7rem;
			background: white;
			padding-bottom: 7rem;
			@include media-breakpoint-down(md) {
				font-size: 4.8rem;
				line-height: 5.2rem;
				max-width: 28.5rem;
				margin: -5.7rem auto 0;
				padding-left: 1.5rem;
				padding-right: 1.5rem;
			}
		}
		.benefit__items {
			padding-left: 6rem;
			margin: 0 auto;
			@include media-breakpoint-down(md) {
				max-width: 26rem;
				padding-left: 3rem;
			}
		}
		.benefit__item {
			font-size: 3.2rem;
			line-height: 4.4rem;
			list-style: none;
			position: relative;
			@include media-breakpoint-down(md) {
				font-size: 2.4rem;
				line-height: 3.3rem;
			}
			&::before {
				content: "";
				position: absolute;
				top: 2rem;
				left: -6rem;
				width: 1rem;
				height: 1rem;
				background: black;
				border-radius: 50%;
				@include media-breakpoint-down(md) {
					top: 1.2rem;
					left: -2.5rem;
				}
			}
		}
		.benefit__item:not(:last-child) {
			padding-bottom: 4.8rem;
		}
	}
}
.section-labels-card {
	padding-bottom: 20rem;
	@include media-breakpoint-down(lg) {
		padding-bottom: 7rem;
	}
	.labels-card-title {
		margin-bottom: 9.4rem;
		@include media-breakpoint-down(lg) {
			margin-bottom: 3.2rem;
		}
	}
}
.block-section {
	padding-top: 0;
	padding-bottom: 18rem;
	@include media-breakpoint-down(lg) {
		padding-bottom: 13rem;
	}
}
</style>
