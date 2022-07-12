<template>
    <div>
        <div class="main-section">
            <div class="container">
                <div class=" flex-column-reverse flex-lg-row row">
                    <div class="main__title-wrapp col-12 col-lg-6">
                        <h1 class="h1 main__title">
                            Growing your business
                        </h1>
                        <Button title="Our company" class="btn-dark" :has-icon="true" type="button" />
                    </div>
                    <div class="main-img col-12 col-lg-6">
                        <picture >
                            <source srcset="@/assets/imgs/main-mb.jpg" media="(max-width: 576px)">
                            <img src="@/assets/imgs/mm.png" alt="MDN">
                        </picture>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainSlot",
    }
</script>

<style lang="scss" scoped>
.main-section {
    background: #E5CE5F;
    position: relative;
    overflow: hidden;
    @include media-breakpoint-down(lg) {
        background: #F9ECA2;
        
    }
    .main__title-wrapp {
        z-index: 1;
        margin-top: 240px;

        .main__title {
            padding-bottom: 40px;
            @include media-breakpoint-down(md) {
                font-size: 50px;
                line-height: 60px;
                max-width: 335px;
            }
        }
        padding-bottom: 100px;
        @include media-breakpoint-down(lg) {
        margin-top: 40px;
        }
    }
    .main-img {
        margin-left: -350px;

        @include media-breakpoint-down(lg) {
            margin-left: -250px;
        }
        @include media-breakpoint-down(sm) {
            margin-left: -50px;
        }

        &::before{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 4rem;
        height: 100%;
        background: linear-gradient(180deg, #E5CE5F 0%, rgba(229, 206, 95, 0) 100%);
}
    }
}
    .h1 {
        font-size: 100px;
        line-height: 110px;
        text-transform: uppercase;
        width: 596px;
        max-width: 100%;
    }
</style>