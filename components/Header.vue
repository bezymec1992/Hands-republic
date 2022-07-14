<template>
	<header class="header">
		<div class="container">
			<strong class="logo">
				<nuxt-link to="/">HANDS REPUBLIC</nuxt-link>
			</strong>

			<nav class="main-nav">
				<ul class="main-menu">
					<li class="d-xl-none">
						<strong class="logo">
							<nuxt-link to="/">HANDS REPUBLIC</nuxt-link>
						</strong>
					</li>
					<li v-for="(item, index) in menu" :key="index">
						<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
					</li>
				</ul>
			</nav>
			<a class="open-menu d-xl-none" :class="{ open: menuOpen }" href="#" @click.prevent="toggleMenu">
				<span></span>
				<span></span>
				<span class="visually-hidden">Open Mobile Nav</span>
			</a>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			menuOpen: false,
			menu: [
				{
					title: "Our Company",
					to: "/our-company"
				},
				{
					title: "Working Together",
					to: "/working-together"
				},
				{
					title: "Our Brands",
					to: "/brands"
				},
				{
					title: "Software",
					to: "/software"
				},
				{
					title: "Careers",
					to: "/careers"
				},
				{
					title: "Contact",
					to: "/contact"
				}
			]
		};
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;

			if (this.menuOpen) {
				document.body.classList.add("menu-opened");
			} else {
				document.body.classList.remove("menu-opened");
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	position: relative;
	padding-top: 3.2rem;
	padding-bottom: 3.2rem;
	// background: $white;
	background: transparent;
	z-index: 100;

	@include media-breakpoint-down(md) {
		padding-top: 2.7rem;
		padding-bottom: 2.7rem;
	}

	> .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-family: $big-shoulders-display;
		font-size: 4rem;
		text-transform: uppercase;

		@include media-breakpoint-down(md) {
			font-size: 3.2rem;
		}
	}

	.main-nav {
		transition: $transition;

		@include media-breakpoint-down(xl) {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			padding: 12rem 3rem 4rem 3rem;
			background: $white;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			z-index: 99;
		}

		.menu-opened & {
			@include media-breakpoint-down(xl) {
				opacity: 1;
				visibility: visible;
				pointer-events: all;
			}
		}

		.main-menu {
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 2rem;

			@include media-breakpoint-down(xl) {
				width: 100%;
				overflow: auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				flex: 1;
				font-size: 2.4rem;
			}

			@include media-breakpoint-up(xl) {
				display: flex;
			}

			li {
				&:not(:last-child) {
					@include media-breakpoint-up(xl) {
						margin-right: 4rem;
					}

					@include media-breakpoint-down(xl) {
						margin-bottom: 5rem;
					}
				}
			}

			a {
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

				&.active {
					&:after {
						transform: scaleX(1);
						transform-origin: bottom left;
					}
				}
			}
		}
	}

	.open-menu {
		position: relative;
		width: 3rem;
		height: 3rem;
		display: block;
		font-size: 0;
		line-height: 0;
		z-index: 100;

		span {
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			border-bottom: 0.3rem solid;
			height: 0;
			transition: $transition;

			// .menu-opened & {
			// 	@include media-breakpoint-down(lg) {
			// 		color: $white;
			// 	}
			// }

			&:nth-child(1) {
				margin-top: -0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(45deg);
				}
			}

			&:nth-child(2) {
				margin-top: 0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(-45deg);
				}
			}
		}
	}

	.header-absolute & {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
}
</style>
