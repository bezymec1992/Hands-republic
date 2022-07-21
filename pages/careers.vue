<template>
	<div>
		<main-slot>
			<div class="container">
				<div class="flex-column-reverse flex-lg-row row">
					<div class="intro__title-wrapp col-12 col-lg-8">
						<h1 class="h1 intro__title">Be with people who share your passion</h1>
						<Button title="Find your team" class="btn-dark-outline-title" :has-icon="true" type="button" />
					</div>
					<div class="col-12 col-lg-4">
						<div class="intro-img">
							<picture>
								<source srcset="@/assets/imgs/career-intro-mb.png" media="(max-width: 991px)" />
								<img src="@/assets/imgs/career-intro.png" alt="MDN" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</main-slot>

		<stand :title1="stand.title1" :title2="stand.title2" :img="stand.img" :imgMob="stand.imgMob" />

		<div class="join">
			<div class="container">
				<div class="join__wrapper">
					<div class="row">
						<div class="join__title-wrap col-12 col-xl-6">
							<h2 class="h2 join__title">Reasons to join Hands Republic</h2>
							<div class="desk">
								<Button title="Work together" class="btn-dark-outline-title" :has-icon="true" type="button" />
							</div>
						</div>
						<div class="join__items col-12 col-xl-6">
							<ul class="join__item-wrap">
								<li class="join__item">
									<span class="join__span"></span>
									Collaborate
								</li>
								<li class="join__item">
									<span class="join__span"></span>
									Grow
								</li>
								<li class="join__item">
									<span class="join__span"></span>
									Relax
								</li>
							</ul>
							<ul class="join__item-wrap">
								<li class="join__item">
									<span class="join__span"></span>
									Balance
								</li>
								<li class="join__item">
									<span class="join__span"></span>
									Diversity
								</li>
								<li class="join__item">
									<span class="join__span"></span>
									Succeed
								</li>
							</ul>
						</div>
						<div class="mobil">
							<Button title="Find your team" class="btn-dark" :has-icon="true" type="button" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<block-section :title="block.title" :text="block.text" :img="block.img" :imgMob="block.imgMob">
		<template #title>
				Inclusive hiring
			</template>
		</block-section>
		<Marquee>
			SHARE <span>YOUR</span> <br class="d-md-none" />
			PASSION
    	</Marquee>
		<contact-section />
	</div>
</template>

<script>
import MainSlot from "@/components/MainSlot";
import Stand from "@/components/Stand";
import BlockSection from "@/components/BlockSection";
import Marquee from "@/components/Marquee";
import ContactSection from "@/components/ContactSection";


export default {
	components: {
		MainSlot,
		Stand,
		BlockSection,
		Marquee,
		ContactSection
	},
	data() {
		return {
			stand: {
				title1: "Find your team",
				title2: "in 15 European countries",
				img: "career-stand.png",
				imgMob: "career-stand-mb.png"
			},
			block: {
				title: "Inclusive hiring",
				text: "To continually build and develop online solutions for our diverse customers, we need individuals within team.blue that represent all of those customers, including people with disabilities.",
				img: "block-img.png",
				imgMob: "block-img-mb.png"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.intro-section {
	background: #add9da;
	position: relative;
	overflow: hidden;
	.intro__title-wrapp {
		width: 55.3rem;
		max-width: 100%;
		margin-top: 13rem;
		@include media-breakpoint-down(lg) {
			margin-top: 0;
		}
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
		&::before {
			@include media-breakpoint-up(lg) {
				content: "";
				position: absolute;
				right: -0.2rem;
				bottom: 0;
				width: 18rem;
				height: 100%;
				background: linear-gradient(270deg, #add9da 0%, rgba(229, 206, 95, 0) 100%);
			}
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.join {
	padding-top: 160px;
	@include media-breakpoint-down(lg) {
		padding-top: 80px;
	}
	.desk {
		@include media-breakpoint-down(xl) {
			display: none;
		}
	}
	.mobil {
		display: flex;
		justify-content: center;
		@include media-breakpoint-up(xl) {
			display: none;
		}
		@include media-breakpoint-down(md) {
			justify-content: left;
		}
	}
	.join__title {
		margin-bottom: 50px;
		@include media-breakpoint-down(xl) {
			text-align: center;
		}
		@include media-breakpoint-down(md) {
			text-align: left;
		}
	}
	.join__items {
		margin-top: 80px;
		display: flex;
		justify-content: space-between;
		width: 500px;
		max-width: 100%;
		margin-left: auto;
		padding: 0 20px;
		@include media-breakpoint-down(xl) {
			margin-left: unset;
			margin: 0 auto;
			margin-bottom: 45px;
		}
		@include media-breakpoint-down(md) {
			width: 400px;
			margin-left: unset;
		}
	}
	.join__item-wrap {
		padding: 0;
	}
	.join__item {
		font-size: 32px;
		line-height: 44px;
		list-style: none;
		display: flex;
		align-items: center;
		.join__span {
			width: 32px;
			height: 1px;
			background: gray;
			margin-right: 20px;
			@include media-breakpoint-down(md) {
				width: 20px;
			}
		}
		@include media-breakpoint-down(md) {
			font-size: 20px;
			line-height: 27px;
		}
		&:not(:last-child) {
			margin-bottom: 60px;
			@include media-breakpoint-down(md) {
				margin-bottom: 27px;
			}
		}
	}
	
}

.block-section {
		padding-bottom: 0;
	}
</style>
