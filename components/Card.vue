<template>
        <div class="card">
            <img :src="require(`@/assets/imgs/${img}`)" alt="title" class="card-img" />
            <div class="card__info">
                <h3 class="h2 card__title">
                    {{title}}
                </h3>
                <div class="card__text-wrapp d-flex align-items-center">
                    <span class="card__span"></span>
                    <p class="card__text">
                        {{text}}
                    </p>
                </div>
            </div>
            
        </div>
</template>

<script>
export default {
    name: "Card",
    props: {
		title: {
			type: String,
			default: "title"
		},
		text: {
			type: String,
			default: "description"
		},
		img: {
			type: String,
			default: "person1.jpg"
		},
    }
}
</script>

<style lang="scss" scoped>
    .card {
        background: #F2F1F2;
        margin-bottom: 63px;
        @include media-breakpoint-down(md) {
            margin-bottom: 20px;
        }
        .card__info {
            padding-left: 34px;
            padding-bottom: 45px;
            @include media-breakpoint-down(md) {
                padding-left: 20px;
                padding-bottom: 24px;
            }
            .card__title {
                font-size: 68px;
                line-height: 70px;
                text-transform: uppercase;
                max-width: 265px;
                margin-top: -22px;
                margin-bottom: 22px;
                @include media-breakpoint-down(md) {
                    font-size: 40px;
                    line-height: 44px;
                }
                @include media-breakpoint-down(lg) {
                    font-size: 50px;
                    line-height: 54px;
                }
            }
            .card__text-wrapp {
                .card__span {
                    width: 47px;
                    height: 1px;
                    background: #000000;
                    @include media-breakpoint-down(md) {
                        width: 32px;
                    }
                }
                .card__text {
                    margin-left: 14px;
                    margin-bottom: 0;
                    font-size: 16px;
                }
            }
        }
        .card-img {
            width: 100%;
            height: auto;
        }
    }
</style>