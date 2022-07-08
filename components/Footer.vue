<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<strong class="logo">
						<nuxt-link to="/">HANDS REPUBLIC</nuxt-link>
					</strong>
					<a href="mailto:hello@handsrepublic.com">hello@handsrepublic.com</a>
					<SocialLinks color="black" hoverColor="white" hoverBackground="black" />
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-6"></div>
						<div class="col-6"></div>
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
					{ title: "Our Company", to: "/" },
					{ title: "Working Together", to: "/" },
					{ title: "Our Brands", to: "/" },
					{ title: "Software", to: "/" },
					{ title: "Careers", to: "/" },
					{ title: "Contact", to: "/" }
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

	@include media-breakpoint-down(md) {
		padding-top: 10rem;
		padding-bottom: 8rem;
	}

	.logo {
		font-family: $big-shoulders-display;
	}
}
</style>
