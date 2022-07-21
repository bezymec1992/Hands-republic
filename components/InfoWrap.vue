<template >
  <div class="wrap-info">
    <div class="container">
      <div class="row g-0">
        <div class="col-12 col-md-7">
          <div class="wrap-info__img">
            <picture>
              <source
                :srcset="require(`@/assets/images/${imgMob}`)"
                media="(max-width: 992px)"
                width="580px"
                height="406px"
              />
              <img
                :src="require(`@/assets/images/${img}`)"
                alt="img"
                width="100%"
                height="auto"
              />
            </picture>
          </div>
        </div>
        <div class="col-12 col-md-5 d-flex align-items-center">
          <div class="wrap-info__wrapper">
            <h2 class="h2 wrap-info__title">
              {{ title }}
            </h2>
            <div class="wrap-info__text-holder">
              <p class="wrap-info__text">
                {{ text }}
              </p>
              <Button
                v-if="btn.title"
                :title="btn.title"
                class="btn-dark d-none d-md-inline-flex"
                :has-icon="true"
                type="nuxt-link"
                :to="btn.to"
              />
              <Button
                v-if="btn.title"
                :title="btn.title"
                class="btn-dark-outline-title d-md-none"
                :has-icon="true"
                type="nuxt-link"
                :to="btn.to"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "InfoWrap",
  components: {
    Button,
  },
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
    btn: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-info {
  max-width: 144rem;
  margin: 0 auto;
  overflow: hidden;

  &__img {
    margin-left: -8rem;

    @include media-breakpoint-down(sm) {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    @include media-breakpoint-down(md) {
      margin-right: -2.4rem;
      margin-bottom: 3.3rem;
    }

    img {
      width: 100%;
      height: auto;
    }

    // width: 100%;
    // height: auto;
    // margin-bottom: 3.2rem;
    // @include media-breakpoint-up(md) {
    //   margin-bottom: 0;
    // }
  }

  &__title {
    margin-bottom: 1.6rem;

    max-width: 35rem;
    @include media-breakpoint-up(xxl) {
      margin-top: 0;
      margin-bottom: 3.2rem;
      max-width: 45rem;
    }
  }
  &__wrapper {
    @include media-breakpoint-up(md) {
      padding-left: 2rem;
    }
    @include media-breakpoint-up(xl) {
      padding-left: 8rem;
    }
  }
  // &__text-holder {
  //   max-width: 45rem;
  // }
  &__text {
    font-size: 2rem;
    line-height: 1.6;
    margin: 0;
    @include media-breakpoint-up(lg) {
      font-size: 2.4rem;
      line-height: 1.83;
    }
  }
  .btn-dark {
    margin-top: 3.2rem;
    @include media-breakpoint-up(md) {
      margin-top: 5rem;
    }
  }
  .btn-dark-outline-title {
    margin-top: 3.2rem;
    @include media-breakpoint-up(md) {
      margin-top: 5rem;
    }
  }
}
</style>