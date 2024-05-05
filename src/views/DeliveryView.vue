<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
</script>

<script>
import { ref } from 'vue';
import MapArea from '../components/MapArea.vue';

var confirmedLocation = ref('');

export default {
    methods: {
        getLocation(location) {
            confirmedLocation.value = location
        }
    },
    components: {
        MapArea
    }
};
</script>

<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Menu' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Wybierz adres dostawy</template>
                </SmallTitle>
            </div>
            <div class="row">
                <MapArea @providedLocation="getLocation" />
            </div>
            <!-- <div class="row">
                <div id="confirmed-location">
                    <p>Potwierdzona lokalizacja: {{ confirmedLocation }}</p>
                </div>
            </div> -->
            <div v-if="confirmedLocation !== ''">
                <div class="row">
                    <router-link :to="{
                        name: 'Summary', query: {
                            location: confirmedLocation,
                            title: $route.query.title,
                            description: $route.query.description,
                            price: $route.query.price
                        }
                    }">
                        <button class="btn next-button">Przejdź dalej</button>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
#confirmed-location {
    margin-top: 50px
}

a {
    text-align: center;
}

.container>div:nth-of-type(4) {
    margin-top: 40px;
}

.next-button {
    margin-bottom: 40px;
}

@media screen and (max-width: 900px) {
    .container>div:nth-of-type(4) {
        margin-top: 20px;
    }
}
</style>
