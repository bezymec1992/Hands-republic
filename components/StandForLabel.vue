<template>
  <div class="stand-for-label">
    <div class="container">
      <div class="stand-for-label__wrapper d-flex align-items-xl-center">
        <div class="stand-for-label__img-wrap">
          <picture class="stand-for-label__img">
            <source
              :srcset="require(`@/assets/images/${imgMob}`)"
              media="(max-width: 992px)"
              width="100%"
              height="auto"
            />
            <img :src="require(`@/assets/images/${img}`)" alt="img" />
          </picture>
        </div>
        <div class="stand-for-label__content-holder">
          <h2 class="h2 stand-for-label__title">
            {{ title }}
          </h2>
          <div v-if="text" class="stand-for-label__text-holder">
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StandForLabel",

  props: {
    title: {
      type: String,
      default: "title",
    },
    text: {
      type: String,
      default: "",
      require: false,
    },

    img: {
      type: String,
      default: "img-00023.png",
    },
    imgMob: {
      type: String,
      default: "img-00022.png",
    },
  },
};
</script>

<style lang="scss" scoped>
.stand-for-label {
  padding: 15rem 0 0;
  overflow: hidden;
  &__img-wrap {
    @include media-breakpoint-down(lg) {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }

  @include media-breakpoint-down(xl) {
    padding-top: 8rem;
    &__img-wrap {
      display: flex;
      flex-direction: column-reverse;
    }
    &__img {
      @include media-breakpoint-down(xl) {
        margin-bottom: 2.4rem;
      }
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
    }
  }

  &__content-holder {
    @include media-breakpoint-up(xl) {
      margin-left: -12rem;
      // margin-bottom: -9.5rem;
    }
  }
  &__title {
    margin-bottom: 2rem;
    @include media-breakpoint-up(xl) {
      margin-bottom: 5rem;
    }
  }
  &__text-holder {
    font-size: 2rem;
    line-height: 1.9;
    max-width: 66rem;
    @include media-breakpoint-up(xl) {
      max-width: 57.3rem;
      font-size: 2.4rem;
      line-height: 1.7;
    }
  }
  .stand-img {
    z-index: -1;
    position: relative;
    @include media-breakpoint-down(xl) {
      position: unset;
      margin-bottom: 4rem;
      margin-left: -2rem;
      margin-right: -2rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
