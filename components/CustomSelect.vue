<template>
	<div class="custom-select" :tabindex="tabindex" @blur="open = false">
		<div class="selected" :class="{ open: open }" @click="open = !open">
			{{ !selected.title ? this.default : selected.title }}
		</div>
		<div class="items" :class="{ selectHide: !open }" @click="clicked">
			<div
				v-for="(option, i) of options"
				:key="i"
				@click="
					selected = option;
					open = false;
				"
			>
				{{ option.title }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true,
			default: () => []
		},
		default: {
			type: String,
			required: false,
			default: null
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0
		}
	},
	data() {
		return {
			selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
			open: false
		};
	},
	// methods() {
	// 	this.$emit("input", this.selected);
	// },
	methods: {
		clicked() {
			this.$emit("click", this.selected);
			// console.log(this.selected);
		}
	}
};
</script>

<style lang="scss" scoped>
.custom-select {
	position: relative;
	width: 100%;
	text-align: left;
	outline: none;
	border: 1px solid rgb(0, 0, 0, 0.5);
	padding: 0 3.8rem;
	height: 8rem;
	display: flex;
	align-items: center;
	font-size: 30px;
	cursor: pointer;
	@include media-breakpoint-down(md) {
		height: 4rem;
		font-size: 16px;
	}
}

.custom-select .selected {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 4rem;
	background-color: transparent;
	color: rgba(0, 0, 0, 0.5);
	cursor: pointer;
	user-select: none;
}

.custom-select .selected.open {
}

.custom-select .selected:after {
	position: absolute;
	content: "";
	top: 50%;
	transform: translateY(-50%);
	right: 3rem;
	width: 0;
	height: 0;
	border: 5px solid transparent;
	border-color: black transparent transparent transparent;
}

.custom-select .items {
	color: #fff;
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	background-color: $white;
	z-index: 1;
	border: solid 1px rgba(0, 0, 0, 0.3);
}

.custom-select .items div {
	padding: 20px 40px;
	color: black;
	cursor: pointer;
	user-select: none;

	&:not(:last-child) {
		border-bottom: solid 1px rgba(0, 0, 0, 0.2);
	}
}

.custom-select .items div:hover {
	background: rgba(246, 195, 195, 0.4);
}

.selectHide {
	display: none;
}
</style>
