<script setup>
import BigTitle from '../components/text/BigTitle.vue'
</script>

<template>
    <main class="background-main-2">
        <div class="container">
            <div class="row">
                <img src="../assets/images/success-ilustration.png" alt="Success icon" />
            </div>
            <div class="row">
                <BigTitle>
                    <template #title>Zamówienie złożone!</template>
                </BigTitle>
                <p>
                    Przewidywany czas dostawy: 2h
                </p>
            </div>
            <div class="row" id="buttons">
                <div class="col-md-6">
                    <router-link :to="{ name: 'Home' }">
                        <button class="btn next-button">Wróć na start</button>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link :to="{ name: 'Account' }">
                        <button class="btn next-button orange">Zobacz listę zamówień</button>
                    </router-link>
                </div>
            </div>
        </div>
    </main>

</template>

<style scoped>
main {
    padding-top: 150px;
    text-align: center;
}

img {
    width: 200px;
    margin: 0 auto;
}

h3 {
    text-align: center !important;
}

#buttons>div:nth-of-type(1) button {
    float: right;
}

#buttons>div:nth-of-type(2) button {
    float: left;
}

.orange {
    background-color: var(--color-orange) !important;
}

@media screen and (max-width: 900px) {
    #buttons button {
        float: none !important;
    }
}
</style>
