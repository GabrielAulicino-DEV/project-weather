<template>
    <div id="card" class="card-container">
        <div class="content top">
            <span class="text-color-darkgray"> {{ city }}, {{ country }} </span>
        </div>
        <hr class="divider">
        <div class="content center-div">
            <div v-if="loading || reloading">
                <Loading />
            </div>
            <div v-else>
                <span v-if="temperature && temperature > 25" class="span-center red">{{ temperature }}°</span>
            <span v-else-if="temperature && temperature >= 5" class="span-center orange">{{ temperature }}°</span>
            <span v-else-if="temperature && temperature < 5" class="span-center blue">{{ temperature }}°</span>
            <div v-if="!temperature" class="error-content">
                <span class="span-alert">Something went wrong</span>
                <button class="button-retry" @click="$emit('clicked')">Try Again</button>
            </div>
            </div>
        </div>
        <div class="footer">
            <div class="content top-footer">
                <div v-if="numberHumity" class="content content-top-footer">
                    <span class="text-midle-first text-color-gray">HUMITY</span>
                    <span class="content text-midle text-color-darkgray">{{ numberHumity }}%</span>
                </div>
                <div v-if="numberPressure" class="content content-top-footer">
                    <span class="text-midle-first text-color-gray">PRESSURE</span>
                    <span class="content text-midle text-color-darkgray">{{ numberPressure }}hPa</span>
                </div>
            </div>
            <div class="content bottom-footer">
                <span class="text-color-gray">Updated at 02:48:32 PM</span>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './LoadingComponent.vue';
export default {
    name: 'CardWeather',
    components: { Loading },
    props: {
        reloading: {
            type: Boolean,
            default: false
        },
        loading:{
            type: Boolean,
            default: false
        },
        city: {
            type: String,
            default: "",
            required: true
        },
        country: {
            type: String,
            default: "",
            required: true
        },
        temperature: {
            type: Number,
            default: null,
        },
        numberHumity: {
            type: Number,
            default: 0,
        },
        numberPressure: {
            type: Number,
            default: 0,
        },
    }
}
</script>

<style scoped>
.card-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 240px;
    border-radius: 5px;
    box-shadow: 0px 0px 1px #333333;
    height: max-content;
    margin-top: 10px;
}

.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.span-alert {
    color: #ED1946;
    font-size: 20px;
}

.button-retry {
    color: #B4B4B4;
    font-size: 15px;
    background: none;
    border-radius: 30px;
    border-color: #B4B4B4;
    cursor: pointer;
    margin-top: 20px;
    border: 2px solid;
    padding: 15px 32px;
}

.text-midle {
    font-size: 16px;
}

.text-midle-first {
    font-size: 15px;
}

.top {
    padding: 10px
}

hr.divider {
    width: 100%;
    border-top: 0px solid #EBEBEB;
}

.center-div {
    margin-top: 12px;
}

.content {
    display: flex;
    justify-content: center;
}

.span-center {
    font-size: 80px;
    color: #ED1946;
}

.footer {
    margin-top: 3em;
    background-color: #F1F1F1;
    opacity: 90%;

}

.top-footer {
    justify-content: space-evenly;
    padding: 10px;
    flex-direction: row;
}

.content-top-footer {
    flex-direction: column;
}

.bottom-footer {
    font-size: 10px;
    padding: 5px;
}

.text-color-gray {
    color: #B4B4B4;
}

.text-color-darkgray {
    color: #737C84;
}

.red {
    color: #ED1946;
}

.blue {
    color: #69A3FF;
}

.orange {
    color: #FF9632
}
</style>