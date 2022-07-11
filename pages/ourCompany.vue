<template>
    <div>
        <div class="core">
            <div class="container">
                
                    <h2 class="h2 core__title">
                        Our core values
                    </h2>
                    <div class="core__items row d-flex justify-content-center">
                        <p class="core__item col-12 col-xl-3">Empowering businesses</p>
                        <p class="core__item col-12 col-xl-3">Customer obsessed</p>
                        <p class="core__item col-12 col-xl-3">Embrace difference</p>
                        <p class="core__item col-12 col-xl-3">Never stop improving</p>
                    </div>
                
            </div>
        </div>

    
            
        <quote-section :text="quote.text" :name="quote.name" :position="quote.position" :img="quote.img" :imgMob="quote.imgMob"/>
            
        <div class="cards">
            <div class="container">
                <div class="row">
                    <div v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4">
                        <Card :title="card.title" :text="card.text" :img="card.img"/>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import QuoteSection from "@/components/QuoteSection";
import Card from "@/components/Card";


export default {
    components: {
        QuoteSection,
		Card
	},
     data() {
		return {
            quote: {
                text: "We are taking the lead in Europe to become the most trusted online enabler, and we realise this can only be done through sharing knowledge and ideas.",
                name: "Jonas Dhaenens, ",
                position: " Group CEO",
                img: "quote-img.jpg",
                imgMob: "quote-mb.jpg"
            },
			cards: [
                { 
                    id: 1, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person1.jpg",
                },
				{ 
                    id: 2, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person2.jpg",
                },
                { 
                    id: 3, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person3.jpg",
                },
                { 
                    id: 4, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person4.jpg",
                },
                { 
                    id: 5, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person5.jpg",
                },
                { 
                    id: 6, 
                    title: "Jonas Dhaenens", 
                    text: "Group CEO",
                    img: "person6.jpg",
                },
				
			]
		};
	}
}
</script>

<style lang="scss" scoped>
    .core {
        max-width: 1200px;
        margin: 0 auto;
        .core__title {
            text-align: center;
            font-size: 100px;
            line-height: 120px;
            text-transform: uppercase;
            @include media-breakpoint-down(md) {
                font-size: 50px;
                line-height: 60px;
            }
        }
        .core__item:not(:last-child) {
            border-right: 1px solid gray;
            @include media-breakpoint-down(xl) {
                border-right: none;
                border-bottom: 1px solid gray;
            }
            
        }
        .core__item {
            font-size: 32px;
            line-height: 40px;
            padding: 60px 0;
            text-align: center;
            @include media-breakpoint-down(xl) {
                width: 400px;
                max-width: 100%;
                margin: 0 auto;
                
            }
            @include media-breakpoint-down(md) {
                font-size: 24px;
                line-height: 46px;
                width: 280px;
                padding: 30px 0;
            }
        }
        .core__items {
            @include media-breakpoint-down(xl) {
                display: flex;
                flex-direction: column;
            }
        }
    
    }
    .cards {
        .row {
            @include media-breakpoint-up(xl) {
            @include grid-gutter(4rem);
            }
        }
    }
    
</style>