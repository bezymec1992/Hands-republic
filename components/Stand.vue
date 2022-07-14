<template>
    <div class="stand">
        <div class="container">
            <div class="stand__wrapper d-flex  align-items-md-center">
                <div class="stand__img-wrapp">
                    <h2 class="h2 stand__title text-md-center">
                        {{title1}}
                    </h2>
                    <picture class="stand-img">
                        <source :srcset="require(`@/assets/imgs/${imgMob}`)" media="(max-width: 767px)"/>
                        <img :src="require(`@/assets/imgs/${img}`)" alt="img"/>
                    </picture>
                </div>
                <h2 class="h2 stand__title2">
                    {{title2}}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stand",
    props: {
		title1: {
			type: String,
			default: "title"
		},
		title2: {
			type: String,
			default: "description"
		},
		img: {
			type: String,
			default: "career-stand.png"
		},
        imgMob: {
			type: String,
			default: "career-stand-mb.png"
		},
    }
}
</script>

<style lang="scss" scoped>
    .stand {
        padding: 15rem 0 0;
        overflow: hidden;
        @include media-breakpoint-down(xl) {
            padding-top: 8rem;
            .stand__img-wrapp {
                display: flex;
                flex-direction: column-reverse;
            }
            .stand__wrapper {
                display: flex;
                flex-direction: column;
            }
        }
        .stand__title {
            margin-bottom: -5rem;
            @include media-breakpoint-down(xl) {
                margin-bottom: 0;
            }
        }
        .stand__title2 {
            margin-left: -15rem;
            margin-bottom: -9.5rem;
            @include media-breakpoint-down(xl) {
                margin-left: 0;
                margin-bottom: 0;
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