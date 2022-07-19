<template>
	<div>
        <main-slot>
			<div class="container">
				<div class="flex-column-reverse flex-lg-row row">
					<div class="intro__title-wrapp col-12 col-lg-5">
						<h1 class="h1 intro__title">We are better together</h1>
						<Button title="Let’s talk" class="btn-dark" :has-icon="true" type="button" />
					</div>
					<div class="col-12 col-lg-7">
						<div class="intro-img">
							<picture>
								<source srcset="@/assets/imgs/working__intro-mb.png" media="(max-width: 992px)" />
								<img src="@/assets/imgs/working__intro-desk.png" alt="MDN" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</main-slot>

		<Stand title1="We like business"
            title2="that makes a difference" 
            img="working-stand-desk.png" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            img-mob="working-stand-mb.png"
        />

		<div class="teaming">
			<div class="container">
				<h2 class="h2 teaming__title">Teaming – what can you expect?</h2>
				<div class="teaming__items row justify-content-center ">
					<div class="teaming__item col-12 col-md-6 col-lg-4 ">
						<h4 class="h4 teaming__sub-title">Expand your business reach</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div class="teaming__item col-12 col-md-6 col-lg-4">
						<h4 class="h4 teaming__sub-title">Commercial know how</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div class="teaming__item col-12 col-md-6 col-lg-4">
						<h4 class="h4 teaming__sub-title">Product expertise</h4>
						<p class="teaming__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
				</div>
			</div>
		</div>

		<block-section :title="block.title" :text="block.text" :img="block.img" :img-mob="block.imgMob" />

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
import MainSlot from "@/components/MainSlot";
import BlockSection from "@/components/BlockSection";
import Card from "@/components/Card";
import ContactSection from "@/components/ContactSection";
import Stand from "@/components/Stand";

export default {
	components: {
        MainSlot,
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
.intro-section {
    background: #EBADBD;
    position: relative;
	overflow: hidden;
    .intro__title-wrapp {
        width: 55.3rem;
    }
    @include media-breakpoint-down(lg) {
        background: #F3F3F3;
    }
    .intro-img {
		@include media-breakpoint-up(lg) {
			position: absolute;
			height: 100%;
			width: 100rem;
			right: -5%;
			bottom: 0;
		}
		@include media-breakpoint-down(lg) {
			margin-left: -2rem;
			margin-right: -2rem;
		}
        img {
			width: 100%;
			height: 100%;
		}
    }
}
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
    .teaming__title {
        max-width: 83.2rem;
        margin-bottom: 6rem;
        @include media-breakpoint-down(lg) {
            text-align: center;
            margin: 0 auto 6rem;
        }
        @include media-breakpoint-down(md) {
            text-align: left;
            margin: 0 0 4rem;
            max-width: 31.8rem;
        }
    }
	.teaming__sub-title {
		margin-bottom: 2.4rem;
        max-width: 27.9rem;
        font-size: 3.2rem;
        line-height: 4.4rem;
        text-transform: uppercase;
	}
    .teaming__text {
        padding-top: 2.4rem;
        border-top: .1rem solid gray;
        width: 35.9rem;
        max-width: 100%;
    }
    .teaming__item {
        @include media-breakpoint-down(lg) {
            text-align: center;
            margin: 0 auto;
            &:not(:last-child) {
                margin-bottom: 6rem;
            }
            .teaming__sub-title {
                margin: 0 auto 2.4rem;
            }
            .teaming__text { 
                margin: 0 auto;
            }
        }
        @include media-breakpoint-down(md) {
            text-align: left;
            .teaming__text { 
                margin: 0;
                width: fit-content;
            }
            .teaming__sub-title {
                margin: 0 0 2.4rem;   
            }
        }
    }
}

.stand {
    padding-bottom: 14rem;
    @include media-breakpoint-down(lg) {
        padding-bottom: 10rem;
    }
}
</style>
