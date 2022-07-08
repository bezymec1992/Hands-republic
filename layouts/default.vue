<template>
	<transition>
		<div class="wrapper">
			<Header />
			<main class="main">
				<nuxt />
			</main>
			<Footer />
			<Cookies />
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import globalBreakpoints from "@/mixins/globalBreakpoints";
import Cookies from "@/components/Cookies";

export default {
	components: {
		Header,
		Footer,
		Cookies
	},
	mixins: [globalBreakpoints]
};
</script>
