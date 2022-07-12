<template>
    <div class="select">
        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
            <div class="selected" :class="{ open: open }" @click="open = !open">
                {{ selected }}
            </div>
            <div class="items" :class="{ selectHide: !open }">
                <div
                    v-for="(option, i) of options"
                    :key="i"
                    @click="
                        selected = option;
                        open = false;
                        $emit('input', option);
                    "
                >
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
	
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true
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
	methods() {
		this.$emit("input", this.selected);
	}
};
</script>

<style lang="scss" scoped>
.select {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 910px;
    max-width: 100%;
    @include media-breakpoint-down(md) {
        width: 410px;
        top: 50%;
    }
}
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
    @include media-breakpoint-down(md) {
        height: 4rem;
        font-size: 16px;
    }
    
}

.custom-select .selected {
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
	background-color: #f7f5f2;
	left: 0;
	right: 0;
	z-index: 1;
	border-left: solid 1px rgba(0, 0, 0, 0.2);
	border-right: solid 1px rgba(0, 0, 0, 0.2);
	border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.custom-select .items div {
	color: black;
	padding-left: 10px;
	cursor: pointer;
	user-select: none;

	&:not(:last-child) {
		border-bottom: solid 1px rgba(0, 0, 0, 0.2);
	}
}

.custom-select .items div:hover {
	background: rgba(0, 0, 0, 0.2);
}

.selectHide {
	display: none;
}
</style>