<template>
  <div>
    <div class="card-for-label">
      <div class="container">
        <div class="row align-items-md-center">
          <div class="col-12 col-md-5">
            <h2 class="card-for-label__title h2">{{ title }}</h2>
            <Button
              title="Visit website"
              class="btn-dark"
              :has-icon="true"
              type="button"
            />
          </div>
          <div class="col-12 col-md-7">
            <div class="img-holder">
              <picture class="card-for-label-img">
                <source
                  :srcset="require(`@/assets/images/${imgMob}`)"
                  media="(max-width: 767px)"
                />
                <img :src="require(`@/assets/images/${img}`)" alt="img" />
              </picture>
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
  name: "CardForLabel",
  components: { Button },
  props: {
    title: {
      type: String,
      default: "description",
    },
    img: {
      type: String,
      default: "img-00025.png",
    },
    imgMob: {
      type: String,
      default: "img-00024.png",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-for-label {
  padding-top: 10rem;
  @include media-breakpoint-up(md) {
    padding-top: 9.5rem;
  }

  .row {
    @include media-breakpoint-up(lg) {
      @include grid-gutter(8rem);
    }
  }

  .h2 {
    margin-bottom: 3.2rem;
    max-width: 33rem;

    @include media-breakpoint-up(md) {
      margin-bottom: 5rem;
      max-width: 45rem;
    }
  }

  .img-holder {
    margin-right: -8rem;
    @include media-breakpoint-down(sm) {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    // @include media-breakpoint-up(xxl) {
    //   margin-right: calc((100vw - 1320px) / 2 * -1 - 2rem);
    // }
    // @media (min-width: 1920px) {
    //   margin-right: calc((100vw - 1920px) / 2);
    // }
    img {
      width: 100%;
      height: auto;
    }
  }
  .btn-dark {
    @include media-breakpoint-down(md) {
      margin-bottom: 4rem;
    }
  }
}
</style>
