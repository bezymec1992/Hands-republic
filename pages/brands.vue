<template >
        <div>
            <main-slot>
            <template>
                <div class="intro-main flex-column-reverse flex-lg-row row">
                    <div class="intro__title-wrapp col-12 col-lg-6">
                        <h1 class="h1 intro__title">
                            Our brands
                        </h1>
                        <p class="intro__text">
                            Our flagship brands operate across Europe, offering best in class expertise and services to thousands of customers. 
                        </p>
                        <Button title="Work together" class="btn-dark" :has-icon="true" type="button" />
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="intro-img">
                            <picture >
                                <source srcset="@/assets/imgs/brands-img-mb.png" media="(max-width: 440px)">
                                <img src="@/assets/imgs/brands-img.png" alt="MDN">
                            </picture>
                        </div>
                    </div>
                </div>
            </template>
        </main-slot>

            <div class="section-labels-card">
                <div class="container">
                    <div class="row justify-content-center">
                        <div v-for="(item, index) in labelsList" :key="index" class="col-md-6 col-lg-5 col-xl-4">
                            <LabelCard :card="item" />
                        </div>
                    </div>
                </div>
		    </div>

            <ContactSection/>
        </div>
        
</template>

<script>
    import MainSlot from "@/components/MainSlot";
    import LabelCard from "@/components/LabelCard";
    import Labels from "@/constants/labels";
    import ContactSection from "@/components/ContactSection";
    export default {
        components: {
            MainSlot,
            LabelCard,
            ContactSection,
        },
        data() {
            return {
                labelsList: []
            };
        },
        created() {
            this.labelsList = Labels;
        }
    }
</script>

<style lang="scss" scoped>
    .intro-main {
        padding-bottom: 15rem;
        
        @include media-breakpoint-down(lg) {
            padding-bottom: 5rem;
        }
        .intro__title-wrapp {
            margin-top: 18rem;
            @include media-breakpoint-down(lg) {
                padding-top: 35rem;
                margin-top: 0;
            }
        }
        .intro__text {
            font-size: 2.4rem;
            line-height: 4.3rem;
            width: 57.3rem;
            max-width: 100%;
            padding-bottom: 5rem;
            margin-bottom: 0;
        }
        .intro-img {
            position: absolute;
            overflow: hidden;
            top: 0;
            right: 0;
            z-index: -1;
        }
        .intro-img img {
            width: 100%;
            height: auto;
            @include media-breakpoint-down(md) {
                width: 110%;
            }
        }
    }

    .section-labels-card {
        padding-bottom: 10rem;
        @include media-breakpoint-down(lg) {
            padding-bottom: 8rem;
        }
    }
    
</style>