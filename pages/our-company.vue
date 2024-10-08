<template>
	<div>
		<main-slot>
			<div class="container">
				<div class="flex-column-reverse flex-lg-row row">
					<div class="intro__title-wrapp col-12 col-lg-8">
						<h1 class="h1 intro__title">Growing your business</h1>
						<Button title="Work together" class="btn-dark-outline-title" :has-icon="true" type="nuxt-link" to="/working-together" />
					</div>
					<div class="col-12 col-lg-4">
						<div class="intro-img">
							<picture>
								<source srcset="@/assets/imgs/ma.png" media="(max-width: 991px)" />
								<img src="@/assets/imgs/mm.png" alt="MDN" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</main-slot>

		<InfoWrapper :title="info.title" :text1="info.text1" :text2="info.text2" :span1="info.span1" :span2="info.span2" :img="info.img" :imgMob="info.imgMob" />

		<div class="core">
			<div class="container">
				<h2 class="h2 core__title">Our core values</h2>
				<div class="core__items row d-flex justify-content-center">
					<p class="core__item col-12 col-xl-3">Empowering businesses</p>
					<p class="core__item col-12 col-xl-3">Customer obsessed</p>
					<p class="core__item col-12 col-xl-3">Embrace difference</p>
					<p class="core__item col-12 col-xl-3">Never stop improving</p>
				</div>
			</div>
		</div>

		<div class="hands">
			<div class="container">
				<div class="hands__wrapper">
					<CustomSelect :options="selectProjects" default="Select hands you need..." class="select" @click="goToProject" />
				</div>
			</div>
		</div>

		<quote-section :text="quote.text" :name="quote.name" :position="quote.position" :img="quote.img" :imgMob="quote.imgMob" />

		<div class="shaping">
			<div class="container">
				<div class="shaping__wrapper row justify-content-between">
					<h2 class="h2 shaping__title col-12 col-xl-6">
						The people shaping <br class="title-br" />
						Hands Republic
					</h2>
					<div class="shaping__text-wap col-12 col-xl-6">
						<p class="shaping__text">Our passionate executive and non-executive board members reflect the entrepreneurial spirit that brought about Heands Republic and remains at the heart of how our business is evolving.</p>
						<Button title="Find your team" class="btn-dark-outline-title" :has-icon="true" type="nuxt-link" to="/contact" />
					</div>
				</div>
			</div>
		</div>

		<div class="cards">
			<div class="container">
				<div class="row">
					<div v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4">
						<Card :title="card.title" :text="card.text" :img="card.img" />
					</div>
				</div>
			</div>
		</div>

		<contact-section />
	</div>
</template>
<script>
import MainSlot from "@/components/MainSlot";
import InfoWrapper from "@/components/InfoWrapper";
import QuoteSection from "@/components/QuoteSection";
import Card from "@/components/Card";
import CustomSelect from "@/components/CustomSelect";
import ContactSection from "@/components/ContactSection";

export default {
	components: {
		MainSlot,
		InfoWrapper,
		CustomSelect,
		QuoteSection,
		Card,
		ContactSection
	},
	data() {
		return {
			selectProjects: [
				{
					title: "Juridische Handjes",
					to: "/brands/jur-handjes"
				},
				{
					title: "Photograph Hands",
					to: "/brands/incasso"
				},
				{
					title: "HandsHands",
					to: "/brands/tribalhands"
				},
				// {
				// 	title: "One more hands",
				// 	to: "/4"
				// }
			],
			info: {
				title: "Our story",
				text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
				text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
				span1: "Pellentesque ac blandit leo, nec porta velit.",
				span2: "Pellentesque ac blandit leo, nec porta velit.",
				img: "storry-desk.jpg",
				imgMob: "storry-mb.jpg"
			},
			quote: {
				text: "We are taking the lead in Europe to become the most trusted online enabler, and we realise this can only be done through sharing knowledge and ideas.",
				name: "Jonas Dhaenens, ",
				position: " Group CEO",
				img: "quote-img.jpg",
				imgMob: "quote-mb.jpg"
			},
			cards: [
				{
					id: 1,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person1.jpg"
				},
				{
					id: 2,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person2.jpg"
				},
				{
					id: 3,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person3.jpg"
				},
				{
					id: 4,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person4.jpg"
				},
				{
					id: 5,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person5.jpg"
				},
				{
					id: 6,
					title: "Jonas Dhaenens",
					text: "Group CEO",
					img: "person6.jpg"
				}
			]
		};
	},
	methods: {
		goToProject(value) {
			this.$router.push({ path: value.to });
		}
	}
};
</script>

<style lang="scss" scoped>
.intro-section {
	background: #e5ce5f;
	position: relative;
	overflow: hidden;
	.intro__title-wrapp {
		position: absolute;
		padding-bottom: 0;
		margin-top: 0;
		top: 50%;
		transform: translateY(-50%);
		@include media-breakpoint-down(lg) {
			position: unset;
			transform: unset;
			padding-bottom: 60px;
		}
	}

	@include media-breakpoint-up(md) {
		min-height: 73rem;
	}

	@include media-breakpoint-down(lg) {
		background: #f9eca2;
	}

	.intro-img {
		@include media-breakpoint-up(lg) {
			position: absolute;
			height: 100%;
			width: 110rem;
			right: -3%;
			bottom: 0;
		}

		@include media-breakpoint-down(lg) {
			margin-left: -2rem;
			margin-right: -2rem;
		}
		&::before {
			@include media-breakpoint-up(lg) {
				content: "";
				position: absolute;
				right: -0.2rem;
				bottom: 0;
				width: 18rem;
				height: 100%;
				background: linear-gradient(270deg, #e5ce5f 0%, rgba(229, 206, 95, 0) 100%);
			}
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.wrap {
	padding-top: 180px;
	padding-bottom: 140px;
	@include media-breakpoint-down(lg) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
}
.hands {
	padding-bottom: 100px;
	.hands__wrapper {
		max-width: 1200px;
		min-height: 600px;
		background: url("@/assets/imgs/hands-desk.png") no-repeat center;
		background-size: cover;
		position: relative;
		margin: 0 auto;
		@include media-breakpoint-down(md) {
			background: url("@/assets/imgs/hands-mb.png") no-repeat center;
			min-height: 350px;
			background-size: auto 127%;
		}
	}

	.custom-select {
		position: absolute;
		top: 52%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 910px;
		max-width: 100%;

		@include media-breakpoint-down(md) {
			width: 410px;
			top: 50%;
		}
	}
}
.core {
	max-width: 1200px;
	padding: 0 0 70px;
	margin: 0 auto;
	.core__title {
		text-align: center;
		font-size: 100px;
		line-height: 120px;
		text-transform: uppercase;
		margin-bottom: 40px;
		@include media-breakpoint-down(md) {
			font-size: 50px;
			line-height: 60px;
			margin-bottom: 20px;
		}
	}
	.core__item:not(:last-child) {
		border-right: 1px solid gray;
		@include media-breakpoint-down(xl) {
			border-right: none;
			border-bottom: 1px solid gray;
		}
	}
	.core__item {
		font-size: 32px;
		line-height: 40px;
		padding: 60px 0;
		text-align: center;
		@include media-breakpoint-down(xl) {
			width: 400px;
			max-width: 100%;
			margin: 0 auto;
		}
		@include media-breakpoint-down(md) {
			font-size: 24px;
			line-height: 46px;
			width: 280px;
			padding: 30px 0;
		}
	}
	.core__items {
		@include media-breakpoint-down(xl) {
			display: flex;
			flex-direction: column;
		}
	}
}
.shaping {
	padding-bottom: 200px;
	@include media-breakpoint-down(lg) {
		padding-bottom: 120px;
	}
	.row {
		padding: 0 20px;
	}
	.shaping__text {
		font-size: 24px;
		line-height: 43px;
		margin-bottom: 50px;
		@include media-breakpoint-down(md) {
			font-size: 20px;
			line-height: 32px;
			margin-bottom: 40px;
		}
	}
	.shaping__title {
		width: 568px;
		max-width: 100%;
		padding: 0;
		@include media-breakpoint-down(xl) {
			width: fit-content;
			text-align: center;
			.title-br {
				display: none;
			}
		}
		@include media-breakpoint-down(md) {
			text-align: left;
			width: 320px;
			margin-bottom: 0px;
		}
	}
	.shaping__text-wap {
		margin-top: 50px;
		padding: 0;
		@include media-breakpoint-down(xl) {
			text-align: center;
		}
		@include media-breakpoint-down(md) {
			text-align: left;
			margin-top: 30px;
		}
		.btn-dark {
			@include media-breakpoint-down(xl) {
				margin: 0 auto;
			}
			@include media-breakpoint-down(md) {
				margin: 0;
			}
		}
	}
}
.cards {
	.row {
		@include media-breakpoint-up(xl) {
			@include grid-gutter(4rem);
		}
	}
	padding-bottom: 100px;
	@include media-breakpoint-down(lg) {
		padding-bottom: 70px;
	}
}
</style>
