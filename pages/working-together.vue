<template>
	<div>
		<Stand title1="Find your team" title2="in 15 European countries" />

		<div class="teaming">
			<div class="container">
				<h2 class="h2 teaming__title">Teaming – what can you expect?</h2>
				<div class="teaming__items row justify-content-center">
					<div class="teaming_item col-12 col-md-6 col-lg-4">
						<h4 class="h4 teaming__sub-title">Expand your business reach</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div class="teaming_item col-12 col-md-6 col-lg-4">
						<h4 class="h4 teaming__sub-title">Commercial know how</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div class="teaming_item col-12 col-md-6 col-lg-4">
						<h4 class="h4 teaming__sub-title">Product expertise</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
				</div>
			</div>
		</div>

		<BlockSection :text="block.text" :img="block.img" :img-mob="block.imgMob">
			<template #title>
				Partnerships built <br class="d-md-none" />
				with teams
			</template>
		</BlockSection>

		<div class="cards">
			<div class="container">
				<h2 class="h2 card-title">M&A experts</h2>
				<div class="row justify-content-center">
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
import BlockSection from "@/components/BlockSection";
import Card from "@/components/Card";
import ContactSection from "@/components/ContactSection";
import Stand from "@/components/Stand";

export default {
	components: {
		BlockSection,
		Card,
		ContactSection,
		Stand
	},
	data() {
		return {
			block: {
				title: "Partnerships built with teams",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				img: "working-block-desk.png",
				imgMob: "working-block-mb.png"
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
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.cards {
	padding-bottom: 10rem;
	padding-top: 10rem;
	@include media-breakpoint-down(lg) {
		padding-top: 0;
	}
	.card-title {
		margin-bottom: 3rem;
	}
}

.teaming {
	.teaming__sub-title {
		border-bottom: 1px solid black;
		padding-bottom: 24px;
		margin-bottom: 24px;
	}
}
</style>
