<template>
	<div class="software-page">
		<!-- Software header section -->

		<div class="software-header">
			<div class="container">
				<div class="row flex-md-row-reverse software-header__inner">
					<div class="col-12 col-md-6">
						<div class="software-header__img-holder">
							<img class="software-header__img" src="../assets/images/img-0002.png" alt="image description" />
						</div>
					</div>
					<div class="col-12 col-md-6 d-flex align-items-center">
						<div class="software-header__wrapper">
							<h1 class="h2 software-header__title">
								Software <br />
								hands republic
							</h1>
							<Button title="Work together" class="btn-dark-outline-title" type="nuxt-link" to="/contact" :has-icon="true" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Software functionalities section -->

		<section class="functionalities">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6 functionalities__text-holder">
						<h2 class="h2 functionalities__title">
							multipule <br />
							functionalities <br />
							at one place
						</h2>
					</div>
					<div class="col-12 col-md-6">
						<img class="functionalities__img position-relative" src="../assets/images/img-0004.png" alt="image description" />
					</div>
				</div>
			</div>
		</section>

		<!-- Labels section -->

		<section class="labels">
			<div class="container">
				<software-labels />
			</div>
		</section>

		<!-- Smart section -->

		<section class="smart">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6 d-flex align-items-center">
						<div class="smart__body">
							<h2 class="smart__title h2">
								Smart <br />
								Match making
							</h2>
							<img class="smart__img d-md-none" src="../assets/images/img-0005.png" alt="image description" />
							<div class="smart__text-holder">
								<p class="smart__text mb-0">Have a specified request and need an implementer? Send your request and we will find someone you really need.</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 justify-content-center align-items-center d-none d-md-flex">
						<img class="smart__img" src="../assets/images/img-0006.png" alt="image description" />
					</div>
				</div>
			</div>
		</section>

		<!-- Flexible-remote section -->
		<InfoWrap :title="info.title" :text="info.text" :img="info.img" :imgMob="info.imgMob" />

		<!-- <section class="flexible-remote">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 p-0">
            <img
              class="flexible-remote__img d-md-none"
              src="../assets/images/img-0007.png"
              alt="image description"
            />
            <img
              class="flexible-remote__img d-none d-md-flex"
              src="../assets/images/img-0008.png"
              alt="image description"
            />
          </div>
          <div class="col-12 col-sm-6 d-flex align-items-center">
            <div class="flexible-remote__wrapper">
              <h2 class="flexible-remote__title h2 text-uppercase">
                flexible and <br />
                remote
              </h2>
              <div class="flexible-remote__text-holder">
                <p class="flexible-remote__text">
                  Select your available periods and work where you want
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

		<!-- Dashboard section -->

		<section class="dashboard">
			<div class="container">
				<div class="row dashboard__wrapper">
					<div class="col-12">
						<div class="dashboard__body">
							<h3 class="dashboard__title h2">Dashboard</h3>
							<p class="dashboard__text">Check requests, tasks, milestones, users and agenda</p>
						</div>
					</div>
					<div class="col-12 d-flex justify-content-center">
						<picture>
							<source srcset="@/assets/images/img-0009.png" media="(max-width: 768px)" />
							<img src="@/assets/images/img-00010.png" alt="image description" />
						</picture>
					</div>
				</div>
			</div>
		</section>

		<!-- Manage section -->

		<section class="manage">
			<div class="container">
				<div class="row flex-md-row-reverse">
					<div class="col-12 col-md-6 manage__right">
						<div class="manage__body">
							<h2 class="manage__title h2">
								Manage agenda <br />
								& availibility
							</h2>
							<p class="manage__subtitle">Manage how much and when will you work.</p>
							<img class="manage__img d-md-none" src="../assets/images/img-00011.png" alt="image description" />

							<p class="manage__text">Create events and meetings with your team member or clients. You can also create closed events or just reminder for yourself</p>
						</div>
					</div>
					<div class="col-12 col-md-6 manage__visual">
						<img class="manage__img d-none d-md-flex" src="../assets/images/img-00012.png" alt="image description" />
					</div>
				</div>
			</div>
		</section>

		<!-- Control section -->

		<section class="control">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-5 d-flex align-items-center control__left">
						<div class="control__body">
							<h2 class="control__title h2">
								Control and <br />
								security
							</h2>

							<div class="control__text-holder">
								<p>We care about your personal information and that's why we have created a lot of additional security moduls which help to make everything safe</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-7 px-0 d-flex justify-content-center">
						<div class="control__img-holder">
							<picture>
								<source srcset="@/assets/images/img-00013.png" media="(max-width: 1200px)" />
								<img src="@/assets/images/img-00014.png" alt="image description" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Join the future section -->

		<section class="join-future">
			<div class="container">
				<div class="row g-0">
					<div class="col-12 col-md-6">
						<div class="img-holder">
							<picture>
								<source srcset="@/assets/images/img-00015.jpg" media="(max-width: 768px)" />
								<img src="@/assets/images/img-00016.jpg" alt="image description" />
							</picture>
						</div>
					</div>
					<div class="col-12 col-md-6 d-flex align-items-center">
						<div class="join-future__wrapper">
							<h2 class="join-future__title h2 d-md-none">
								Join the future <br />
								right now
							</h2>
							<h2 class="join-future__title h2 text-uppercase d-none d-md-block">
								Join the <br />
								future right <br />
								now
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact section-->

		<contact-section />
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import ContactSection from "@/components/ContactSection.vue";
import InfoWrap from "@/components/InfoWrap.vue";
import SoftwareLabels from "@/components/SoftwareLabels.vue";
export default {
	components: { SoftwareLabels, Button, ContactSection, InfoWrap },
	data() {
		return {
			info: {
				title: "flexible and remote",
				text: "Select your available periods and work where you want",
				img: "img-0008.png",
				imgMob: "img-0007.png"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.software-page {
	// Header section

	.software-header {
		position: relative;
		display: flex;
		background-color: $mauve;

		@include media-breakpoint-up(md) {
			min-height: 73rem;
			overflow: hidden;
		}

		.container {
			display: flex;
			flex: 1;
		}

		.row {
			flex: 1;
		}

		&__img-holder {
			@include media-breakpoint-up(md) {
				position: absolute;
				top: 0;
				right: 0;
				width: 80rem;
				height: 100%;
				object-fit: cover;
			}

			@include media-breakpoint-down(md) {
				position: relative;
				margin-left: -2rem;
				margin-right: -2rem;
			}

			&::before {
				content: "";
				background: linear-gradient(0deg, #f0c7ff -7.94%, rgba(240, 199, 255, 0) 100%);
				position: absolute;
				width: 100%;
				height: 4rem;
				right: 0;
				bottom: 0;
				z-index: 2;

				@include media-breakpoint-up(md) {
					display: none;
				}
			}

			img {
				width: 100%;
				height: 100%;
			}
		}

		&__wrapper {
			position: relative;
			z-index: 1;

			@include media-breakpoint-down(md) {
				padding-top: 1.8rem;
				padding-bottom: 6.8rem;
			}
		}
		&__title {
			margin-bottom: 4rem;

			@include media-breakpoint-up(lg) {
				margin-bottom: 5.1rem;
			}
		}
		.btn {
			max-width: 25rem;
			@include media-breakpoint-up(md) {
				max-width: 30rem;
			}
		}
	}

	// Functionalities section

	.functionalities {
		overflow: hidden;
		padding-top: 6.8rem;
		@include media-breakpoint-up(md) {
			padding-top: 12.2rem;
		}
		&__text-holder {
			padding-bottom: 4rem;

			@include media-breakpoint-up(md) {
				margin: auto 0;
				padding-bottom: 0;
			}
		}
	}

	// Labels section

	.labels {
		padding-top: 5rem;

		@include media-breakpoint-up(xl) {
			padding-top: 17.3rem;
		}
	}

	// Smart section

	.smart {
		padding-top: 10rem;
		padding-bottom: 8rem;
		@include media-breakpoint-up(xl) {
			padding-top: 20.6rem;
			padding-bottom: 11.6rem;
		}

		&__title {
			margin-bottom: 1.4rem;
			@include media-breakpoint-up(md) {
				margin-bottom: 2.8rem;
			}
		}
		&__text {
			font-size: 2rem;
			line-height: 1.6;

			@include media-breakpoint-up(lg) {
				font-size: 2.4rem;
				line-height: 1.83;
			}
		}

		&__img {
			width: 100%;
			height: auto;
			margin-bottom: 2.8rem;
			@include media-breakpoint-up(md) {
				margin-bottom: 0;
			}
		}
	}

	// Dashboard section

	.dashboard {
		padding-top: 10rem;
		max-width: 144rem;
		overflow: hidden;
		margin: 0 auto;

		&__wrapper {
			@include media-breakpoint-up(md) {
				text-align: center;
			}
		}

		&__title {
			margin-bottom: 1.6rem;
			@include media-breakpoint-up(md) {
				margin-bottom: 1rem;
			}
		}

		&__text {
			margin-bottom: 2.4rem;
			font-size: 2rem;
			line-height: 1.6;
			@include media-breakpoint-up(md) {
				margin-bottom: 2.8rem;
				font-size: 2.4rem;
				line-height: 1.83;
			}
		}

		&__img {
			width: 100%;
			height: auto;
		}
	}

	// Manage section

	.manage {
		padding-top: 10rem;
		&__visual {
			@include media-breakpoint-up(xxl) {
				padding-right: 0;
				padding-left: 0;
			}
		}
		&__title {
			margin-bottom: 1.6rem;

			@include media-breakpoint-up(md) {
				margin-bottom: 4rem;
			}
		}
		&__subtitle {
			font-size: 2rem;
			line-height: 1.6;
			margin-bottom: 2.4rem;
			@include media-breakpoint-up(md) {
				font-size: 2.4rem;
				line-height: 1.83;
				margin-bottom: 2.8rem;
			}
		}
		&__text {
			font-size: 2rem;
			line-height: 1.6;

			@include media-breakpoint-up(md) {
				font-size: 2.4rem;
				line-height: 1.83;
			}
		}

		&__img {
			width: 100%;
			height: auto;
			margin-bottom: 3.2rem;

			@include media-breakpoint-down(md) {
				margin-left: -0.7rem;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: 0;
			}
		}
	}

	// Control section

	.control {
		overflow: hidden;
		max-width: 144rem;
		margin: 0 auto;

		@include media-breakpoint-up(lg) {
			padding-top: 16rem;
		}
		&__left {
			@include media-breakpoint-up(xxl) {
				padding-right: 0;
				padding-left: 0;
			}
		}
		&__body {
			padding-top: 10rem;

			@include media-breakpoint-up(md) {
				padding-top: 10rem;
			}
		}
		&__title {
			margin-bottom: 1.6rem;
			@include media-breakpoint-up(md) {
				margin-bottom: 3.5rem;
			}
		}
		&__text-holder {
			font-size: 2rem;
			line-height: 1.6;
			margin-bottom: 0.8rem;
			max-width: 35rem;

			@include media-breakpoint-up(lg) {
				max-width: 53rem;
			}
			@include media-breakpoint-up(lg) {
				margin-bottom: 0;
				font-size: 2.4rem;
				line-height: 1.83;
			}
		}
		&__img-holder {
			@include media-breakpoint-down(md) {
				margin: 0 -1rem 0 -1.4rem;
			}
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	// Join the future section

	.join-future {
		padding-top: 10rem;
		padding-bottom: 12rem;

		@include media-breakpoint-down(md) {
			padding-top: 8rem;
			padding-bottom: 10rem;
		}

		.container {
			max-width: 144rem;
		}

		.img-holder {
			margin-left: -2rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 3.2rem;
				margin-right: -2rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}

		&__wrapper {
			@include media-breakpoint-up(md) {
				padding-left: 2rem;
			}
			@include media-breakpoint-up(lg) {
				padding-left: 8rem;
			}
		}
	}
}
</style>
