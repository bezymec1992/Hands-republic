<template >
  <div class="wrapper">
    <div class="row align-items-center">
      <picture class="wrapper__img col-12 col-lg-6">
        <source
          :srcset="require(`@/assets/images/${imgMob}`)"
          media="(max-width: 600px)"
          width="636px"
          height="424px"
        />
        <img
          :src="require(`@/assets/images/${img}`)"
          alt="img"
          width="100%"
          height="auto"
        />
      </picture>
      <div class="wrapper__info col-12 col-lg-6">
        <h2 class="h2 wrapper__title">
          {{ title }}
        </h2>
        <p class="wrapper__text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoWrap",
  props: {
    img: {
      type: String,
      default: "storry-desk.jpg",
    },
    imgMob: {
      type: String,
      default: "storry-mb.jpg",
    },
    title: {
      type: String,
      default: "title",
    },
    text: {
      type: String,
      default: "description",
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 70px 0;
  &__info {
    padding-left: 80px;
    @include media-breakpoint-down(lg) {
      padding-left: 40px;
      padding-right: 30px;
      margin-top: 30px;
      max-width: 500px;
      margin: 30px auto 0;
      text-align: center;
    }
    @include media-breakpoint-down(md) {
      margin: 30px 0;
      text-align: left;
    }
  }
  &__img {
    @include media-breakpoint-down(md) {
      width: 100%;
    }
  }

  &__text {
    max-width: 459px;
    line-height: 40px;
    margin-top: 40px;
    @include media-breakpoint-down(lg) {
      line-height: 32px;
    }
  }
}
</style>