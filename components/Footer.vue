<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<strong class="logo">
						<nuxt-link to="/" class="hover-underline">HANDS REPUBLIC</nuxt-link>
					</strong>
					<a href="mailto:hello@handsrepublic.com" class="mailto hover-underline">hello@handsrepublic.com</a>
					<SocialLinks color="black" hover-color="white" hover-background="black" />
				</div>
				<div class="col-lg-6">
					<div class="row">
						<div class="col-6">
							<ul>
								<li v-for="(link, index) in menu[0]" :key="index">
									<nuxt-link :to="link.to" class="hover-underline">{{ link.title }}</nuxt-link>
								</li>
							</ul>
						</div>
						<div class="col-6">
							<ul>
								<li v-for="(link, index) in menu[1]" :key="index">
									<nuxt-link :to="link.to" class="hover-underline">{{ link.title }}</nuxt-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
	name: "Footer",
	components: {
		SocialLinks
	},
	data() {
		return {
			menu: [
				[
					{ title: "Our Company", to: "/our-company" },
					{ title: "Working Together", to: "/working-together" },
					{ title: "Our Brands", to: "/brands" },
					{ title: "Software", to: "/software" },
					{ title: "Careers", to: "/careers" },
					{ title: "Contact", to: "/contact" }
				],
				[
					{ title: "Privacy Policy", to: "/privacy-policy" },
					{ title: "Terms and Conditions", to: "/" }
				]
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.footer {
	padding-top: 16.4rem;
	padding-bottom: 12rem;
	background: $white;

	@include media-breakpoint-down(md) {
		padding-top: 10rem;
		padding-bottom: 8rem;
	}

	.container {
		@include media-breakpoint-up(xl) {
			padding-right: 6rem;
			padding-left: 6rem;
		}
	}

	.logo {
		display: block;
		margin-bottom: 3.8rem;
		font-family: $big-shoulders-display;
		font-size: 6rem;
		line-height: 1;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
			font-size: 4rem;
		}
	}

	.mailto {
		display: inline-block;
		margin-bottom: 8.4rem;
		font-size: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 6rem;
			font-size: 2.4rem;
		}
	}

	.social-links {
		@include media-breakpoint-down(lg) {
			margin-bottom: 6.3rem;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 2rem;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
		}

		li {
			&:not(:last-child) {
				margin-bottom: 3.7rem;

				@include media-breakpoint-down(md) {
					margin-bottom: 3rem;
				}
			}
		}
	}

	.hover-underline {
		position: relative;
		display: inline-block;

		&:after {
			content: "";
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 0;
			bottom: -0.3rem;
			left: 0;
			border-bottom: 0.2rem solid;
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
		}

		&:hover {
			&:after {
				transform: scaleX(1);
				transform-origin: bottom left;
			}
		}
	}
}
</style>
