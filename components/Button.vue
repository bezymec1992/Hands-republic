<template>
  <nuxt-link v-if="type === 'nuxt-link'" :to="to" class="btn">
    <span v-if="title" class="title">{{ title }}</span>
    <span v-if="hasIcon" class="icon-holder">
      <slot name="icon">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4445 8.72184C20.8432 8.32318 20.8432 7.67682 20.4445 7.27816L13.948 0.781619C13.5493 0.382959 12.9029 0.382959 12.5043 0.781619C12.1056 1.18028 12.1056 1.82663 12.5043 2.2253L18.279 8L12.5043 13.7747C12.1056 14.1734 12.1056 14.8197 12.5043 15.2184C12.9029 15.617 13.5493 15.617 13.948 15.2184L20.4445 8.72184ZM0.972656 9.02083H19.7227V6.97917H0.972656V9.02083Z"
            fill="currentColor"
          />
        </svg>
      </slot>
    </span>
  </nuxt-link>
  <a v-else-if="type === 'link'" :href="href" target="_blank" class="btn">
    <span v-if="title" class="title">{{ title }}</span>
    <span v-if="hasIcon" class="icon-holder">
      <slot name="icon">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4445 8.72184C20.8432 8.32318 20.8432 7.67682 20.4445 7.27816L13.948 0.781619C13.5493 0.382959 12.9029 0.382959 12.5043 0.781619C12.1056 1.18028 12.1056 1.82663 12.5043 2.2253L18.279 8L12.5043 13.7747C12.1056 14.1734 12.1056 14.8197 12.5043 15.2184C12.9029 15.617 13.5493 15.617 13.948 15.2184L20.4445 8.72184ZM0.972656 9.02083H19.7227V6.97917H0.972656V9.02083Z"
            fill="currentColor"
          />
        </svg>
      </slot>
    </span>
  </a>
  <button v-else-if="type === 'button'" class="btn" @click="click">
    <span v-if="title" class="title">{{ title }}</span>
    <span v-if="hasIcon" class="icon-holder">
      <slot name="icon">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4445 8.72184C20.8432 8.32318 20.8432 7.67682 20.4445 7.27816L13.948 0.781619C13.5493 0.382959 12.9029 0.382959 12.5043 0.781619C12.1056 1.18028 12.1056 1.82663 12.5043 2.2253L18.279 8L12.5043 13.7747C12.1056 14.1734 12.1056 14.8197 12.5043 15.2184C12.9029 15.617 13.5493 15.617 13.948 15.2184L20.4445 8.72184ZM0.972656 9.02083H19.7227V6.97917H0.972656V9.02083Z"
            fill="currentColor"
          />
        </svg>
      </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
      require: false,
    },
    title: {
      type: String,
      default: "",
      require: false,
    },
    to: {
      type: [String, Object],
      default: "",
    },
    href: {
      type: String,
      default: "#",
      require: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 2rem;
  background: transparent;
  border: none;

  @include media-breakpoint-down(md) {
    font-size: 1.6rem;
  }

  &:focus {
    box-shadow: none;
  }

  .title {
    flex: 1;

    padding: 1.7rem 3.8rem;

    @include media-breakpoint-down(md) {
      padding: 1.33rem 2.6rem;
    }
  }

  .icon-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.2rem;
    height: 6.2rem;
    margin-left: 1.8rem;

    @include media-breakpoint-down(md) {
      width: 5rem;
      height: 5rem;
      margin-left: 1.6rem;
    }
  }

  &.btn-dark {
    .title,
    .icon-holder {
      color: $white;
      background: $black;
      border: solid 0.1rem $black;
      border-radius: 3.6rem;
    }

    &:hover {
      .title,
      .icon-holder {
        background: lighten($black, 10);
        border: solid 0.1rem lighten($black, 10);
      }
    }
  }
}
</style>
