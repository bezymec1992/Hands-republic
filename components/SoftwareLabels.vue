<template>
  <div class="software-labels">
    <ul class="row software-labels__list list-unstyled mb-0">
      <li
        class="col-12 d-flex col-md-6 col-xl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="@/assets/images/icon-0001.svg"
              media="(max-width: 768px)"
            />
            <img src="@/assets/images/icon-0001.svg" alt="match-making" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">match making</h3>
        </div>
      </li>
      <li
        class="
          col-12
          d-flex
          col-md-6 col-xl-3
          software-labels__content-holder software-labels__distance
        "
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0002.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0002.svg" alt="security" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">security</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0003.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0003.svg" alt="task-manager" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">task manager</h3>
        </div>
      </li>
      <li
        class="
          col-12
          d-flex
          col-md-6 col-xl-3
          software-labels__content-holder software-labels__distance
        "
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0004.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0004.svg" alt="chat" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">chat</h3>
        </div>
      </li>
    </ul>

    <ul class="row d-lg-flex justify-content-between list-unstyled mb-0">
      <li
        class="col-12 d-flex col-md-6 col-xl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0005.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0005.svg" alt="data-sharing" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">data sharing</h3>
        </div>
      </li>
      <li
        class="
          col-12
          d-flex
          col-md-6 col-xl-3
          software-labels__content-holder software-labels__distance
        "
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0006.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0006.svg" alt="agenda" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">agenda</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0007.svg"
              media="(max-width: 768px)"
            />
            <img
              src="../assets/images/icon-0007.svg"
              alt="control"
              width="38"
              height="38"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">control</h3>
        </div>
      </li>
      <li
        class="
          col-12
          d-flex
          col-md-6 col-xl-3
          software-labels__content-holder software-labels__distance
        "
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0008.svg"
              media="(max-width: 768px)"
            />
            <img src="../assets/images/icon-0008.svg" alt="remote" />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">remote</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SoftwareLabels",
};
</script>

<style lang="scss" scoped>
.software-labels {
  &__list {
    @include media-breakpoint-up(md) {
      // margin-bottom: 3.5rem;
    }
  }
  &__content-holder {
    align-items: center;
    margin-bottom: 2.5rem;
  }
  &__icon-holder {
    // margin-top: 1rem;
    width: 4.8rem;

    @include media-breakpoint-down(md) {
      width: 4rem;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
  &__text-holder {
    margin-left: 2.936rem;
    @include media-breakpoint-up(md) {
      margin-left: 2.6rem;
    }
  }
  &__title {
    font-size: 3.2rem;
    line-height: 1.857;
    @include media-breakpoint-up(xxl) {
      font-size: 4rem;
      line-height: 1.5;
    }
  }
  &__distance {
    @include media-breakpoint-up(xxl) {
      padding-left: 6rem;
    }
  }
}
</style>
