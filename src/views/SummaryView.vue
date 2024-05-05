<script>
    export default {
        methods: {
            async submitOrder() {
            try {
                // Access the device's camera
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });

                // Camera access successful, perform further actions if needed
                console.log('Camera access successful');

                // Toggle flashlight on and off
                const track = stream.getVideoTracks()[0];
                const capabilities = track.getCapabilities();
                if (capabilities.torch) {
                const toggleFlashlight = async () => {
                    await track.applyConstraints({ advanced: [{ torch: true }] });
                    await new Promise(resolve => setTimeout(resolve, 150));
                    await track.applyConstraints({ advanced: [{ torch: false }] });
                    await new Promise(resolve => setTimeout(resolve, 150));
                };

                // Flash flashlight for 5 seconds (10 iterations)
                for (let i = 0; i < 2; i++) {
                    await toggleFlashlight();
                }
                } else {
                console.warn('Flashlight not supported on this device.');
                }

                // Vibrate the device
                window.navigator.vibrate([1000, 1000]);

                // Remember to stop the camera stream when it's no longer needed
                stream.getTracks().forEach(track => track.stop());
            } catch (error) {
                // Handle errors if accessing the camera fails
                console.error('Error accessing camera:', error);
            }
            }
        }
    };
</script>

<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Delivery' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Podsumowanie zamówienia</template>
                </SmallTitle>
            </div>
            <div class="row">
                <div class="item">
                    <h5>Posiłek:</h5>
                    <p>{{ title }} - {{ description }}<br></p>
                </div>
                <div class="item">
                    <h5>Adres dostawy:</h5>
                    <p>Współrzędne: {{ $route.query.location }}</p>
                </div>
                <div class="item">
                    <h5>Metoda płatności:</h5>
                    <p>Płatność realizujemy podczas dostawy</p>
                </div>
            </div>
            <div class="row">
                <div id="price">
                    <h3> Do zapłaty: {{ price }} zł</h3>
                </div>
            </div>
            <div class="row">
                <router-link @click="placeOrder" :to="{ name: 'Thanks', query: { location: $route.query.location} }">
                    <button class="btn next-button" @click="submitOrder"> Złóź zamówienie </button>
                </router-link>
                <p>Uwaga! Potwierdzonego zamówienia nie można anulować!</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import firebase from '../firebase'; 
import 'firebase/firestore';

import ReturnArrow from '../components/ReturnArrow.vue';
import SmallTitle from '../components/text/SmallTitle.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const description = route.query.description;
const price = ref(route.query.price || 0);
const title = route.query.title || '';

const placeOrder = async () => {
    try {
        const user = firebase.auth().currentUser;
        if (user) {
            const userEmail = user.email;

            // Get the current date and time
            const currentDateTime = new Date().toLocaleString();

            const db = firebase.firestore();
            const orderRef = db.collection('orders').doc(); // Generate a unique document ID
            await orderRef.set({
                user_email: userEmail,
                ordered_dish: title,
                order_address: route.query.location,
                order_price: price.value,
                order_datetime: currentDateTime, // Adding the current date and time
                // Add any other data you want to save
            });
            console.log('Order placed successfully!');
        } else {
            console.error('No user signed in.');
        }
    } catch (error) {
        console.error('Error placing order:', error);
    }
};
</script>


<style scoped>
.item {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: var(--card-background);
    border: 1px solid var(--color-light-grey);
}

.item>h5,
.item>p {
    width: 50%;
    color: var(--color-black);
}

.item p {
    line-height: 250%;
    margin-bottom: 0;
    color: var(--color-orange);
    font-weight: bold;
}

.row>p {
    margin-top: 20px;
    text-align: center;
    color: var(--color-black);
}

a {
    text-align: center;
}

#price{
    margin-top: 20px;
    margin-bottom: 20px;
}
#price > h3{
    text-align: center;
    color: var(--color-black);
}

.next-button {
    margin-top: 10px !important;
}

@media screen and (max-width: 900px) {
    .item {
        width: 90%;
        flex-direction: column;
        justify-content: space-around;
    }

    .item>h5,
    .item>p {
        width: 100%;
    }
}
</style>
