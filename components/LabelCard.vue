<template>
	<div class="card-label">
		<div class="header-card">
			<h3 class="h3">{{ card.title }}</h3>
			<nuxt-link :to="card.to" class="arrow-link">
				<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.4445 8.72184C20.8432 8.32318 20.8432 7.67682 20.4445 7.27816L13.948 0.781619C13.5493 0.382959 12.9029 0.382959 12.5043 0.781619C12.1056 1.18028 12.1056 1.82663 12.5043 2.2253L18.279 8L12.5043 13.7747C12.1056 14.1734 12.1056 14.8197 12.5043 15.2184C12.9029 15.617 13.5493 15.617 13.948 15.2184L20.4445 8.72184ZM0.972656 9.02083H19.7227V6.97917H0.972656V9.02083Z" fill="currentColor" />
				</svg>
			</nuxt-link>
		</div>
		<div class="text-holder">
			<p>{{ card.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.card-label {
	margin-bottom: 2.4rem;
	padding: 7rem 3.2rem;
	background: $wild-sand;
	transition: $transition;

	@include media-breakpoint-down(md) {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
	}

	&:hover {
		background: $pattens-blue;

		.arrow-link {
			color: $white;
			background: $black;
		}
	}

	.arrow-link {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 5rem;
		width: 5rem;
		height: 5rem;
		background: transparent;
		border: solid 0.1rem $black;
		border-radius: 50%;
	}

	.header-card {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 3.2rem;
		}
	}

	.h3 {
		max-width: 10rem;
		margin-top: -1rem;
		margin-bottom: 0;
		font-size: 5.78rem;

		@include media-breakpoint-down(md) {
			font-size: 4.4rem;
		}
	}

	.text-holder {
		font-size: 2rem;
		line-height: 1.6;
	}
	&.style2.card-label {
		background-color: transparent;
		border: 1px solid gray;
		&:hover {
		background: $pattens-blue;
		border: none;
		}
	}
}
</style>
