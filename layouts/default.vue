<template>
	<transition>
		<div class="wrapper">
			<Header />
			<main class="main">
				<nuxt />
			</main>
			<Footer />
			<Cookies />
			<GoTopBtn />
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import globalBreakpoints from "@/mixins/globalBreakpoints";
import Cookies from "@/components/Cookies";
import GoTopBtn from "@/components/GoTopBtn";

export default {
	components: {
		Header,
		Footer,
		Cookies,
		GoTopBtn
	},
	mixins: [globalBreakpoints]
};
</script>
