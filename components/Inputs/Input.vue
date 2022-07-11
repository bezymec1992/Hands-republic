<template>
	<div class="input-group" :class="[{ focus: labelShow }, { error: errorShowing }]">
		<label v-if="inputType === 'input'">
			<transition name="fade">
				<span v-if="(label && labelShow) || value.length > 0" class="label">{{ label }}</span>
			</transition>
			<input class="form-control" :type="type" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput" @focus="showHideLabel(true)" @blur="showHideLabel(false)" />
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
		<label v-if="inputType === 'textarea'">
			<transition name="fade">
				<span v-if="(label && labelShow) || value.length > 0" class="label">{{ label }}</span>
			</transition>
			<div class="textarea-holder">
				<textarea ref="textarea" class="form-control" :maxlength="maxlength" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput" @focus="showHideLabel(true)" @blur="showHideLabel(false)"></textarea>
				<span class="maxlength">
					{{ maxLength }}
				</span>
			</div>
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		inputType: {
			type: String,
			default: "input"
		},
		type: {
			type: String,
			default: "text"
		},
		value: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		errorMessage: {
			type: String,
			default: "Required field"
		},
		errorShowing: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number,
			default: 500
		}
	},
	data() {
		return {
			labelShow: false
		};
	},
	computed: {
		listeners() {
			const { input, ...rest } = this.$listeners;
			return rest;
		},

		maxLength() {
			return this.maxlength - this.value.length;
		}
	},
	methods: {
		onInput(value) {
			this.$emit("input", value.target.value);
		},
		onChange(value) {
			this.$emit("change", value.target.value);
		},
		showHideLabel(value) {
			this.labelShow = value;
		}
	}
};
</script>

<style lang="scss" scoped>
.input-group {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 3.3rem;

	@include media-breakpoint-down(md) {
		margin-bottom: 2.5rem;
	}

	label {
		width: 100%;
	}

	.label {
		position: absolute;
		top: 0;
		left: 2.1rem;
		transform: translateY(-50%);
		display: block;
		padding: 0.5rem 1rem;
		font-size: 1.6rem;
		color: rgba($black, 0.8);
		background: transparent;
		z-index: 2;

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}
	}

	.form-control {
		padding: 1.8rem 2.4rem;
		font-size: 1.8rem;
		color: $black;
		background: transparent;
		border: 0.1rem solid rgba($black, 0.3);
		border-radius: 3rem;

		&::placeholder {
			color: rgba($black, 0.5);
		}

		@include media-breakpoint-down(md) {
			padding: 1.55rem 2rem;
			font-size: 1.6rem;
		}

		&:focus {
			box-shadow: none;
			border-color: $black;
		}
	}

	.textarea-holder {
		position: relative;

		.maxlength {
			position: absolute;
			right: 2.5rem;
			bottom: 1.7rem;
			font-size: 1rem;
			color: rgba($black, 0.5);
		}
	}

	textarea {
		min-height: 13.6rem;
		resize: none;
	}

	.error-message {
		position: absolute;
		left: 0;
		bottom: -2rem;
		font-size: 1.5rem;
		color: $red;

		@include media-breakpoint-down(md) {
			bottom: -1.6rem;
			font-size: 1.2rem;
		}
	}

	&.focus {
		.label {
			color: $black;
		}
	}

	&.error {
		.form-control {
			border-color: $red;
		}
	}
}
</style>
