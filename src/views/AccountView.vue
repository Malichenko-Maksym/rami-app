<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import ProfileCard from '../components/ProfileCard.vue'
import OrdersList from '../components/OrdersList.vue'
import NavigationBar from '../components/NavigationBar.vue'
</script>
<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Home' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>KONTO</template>
                </SmallTitle>
            </div>
            <div class="row scroll">
                <div class="col-md-4">
                    <ProfileCard></ProfileCard>
                </div>
                <div class="col-md-8">
                    <OrdersList></OrdersList>
                </div>
            </div>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped>
.scroll{
    margin-top: 10px;
}
</style>
