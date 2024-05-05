<script setup>
</script>

<template>
    <div id="map-area">
        <div>
            <div id="details">
                <p>Wybrana lokalizacja: {{ markerPosition }} </p>
            </div>
            <div id="confirm">
                <button class="btn" @click="confirmLocation">Potwierdź</button>
            </div>
        </div>
        <div id="map-container">
            <div ref="map"></div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, defineEmits } from 'vue';
import '../assets/leaflet.css';
import L from '../assets/leaflet.js';

export default {
    methods: {
        confirmLocation() {
            this.$emit("providedLocation", this.markerPosition);
        }
    },
    setup() {
        var map = ref(null);
        var markerPosition = ref('');

        var LeafIcon = L.Icon.extend({
            options: {
                iconSize: [38, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
            }
        });

        var greenIcon = new LeafIcon({
            iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
            shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
        })

        onMounted(() => {
            function success(pos) {
                const crd = pos.coords;

                markerPosition.value = `${crd.latitude}, ${crd.longitude}`

                map.value = L.map('map-container').setView([crd.latitude, crd.longitude], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map.value);

                var marker = L.marker(
                    [crd.latitude, crd.longitude], {
                    icon: greenIcon,
                    draggable: true
                }
                ).addTo(map.value);

                marker.on('dragend', function (event) {
                    var marker = event.target;
                    var position = marker.getLatLng();
                    markerPosition.value = `${position.lat}, ${position.lng}`;
                });
            }

            if ('geolocation' in navigator) {
                // Geolocation API is supported
                console.log('Geolocation supported')
                navigator.geolocation.getCurrentPosition(success,
                    position => { },
                    error => {
                        console.log("Location retrieval failed!");
                    }
                )
            } else {
                // Geolocation API is not supported
                console.error('Geolocation is not supported by this browser.');
            }
        });

        return { map, markerPosition };
    }
};
</script>

<style scoped>
#map-area>div:nth-of-type(1) {
    display: flex !important;
    flex-direction: row;
}

#details {
    width: 50%;
    padding: 20px;
    color: var(--color-black);
}

#confirm {
    width: 50%;
    padding: 10px
}

#confirm>button {
    background-color: #e5e5e5 !important;
    color: #000000 !important;
}

#map-container {
    height: 100%;
    border: 1px solid var(--color-light-grey);
    border-radius: 12px;
}

#map-container>div {
    height: 400px;
}

p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 0px;
}

@media screen and (max-width: 900px) {
    #map-container>div {
        height: 300px;
    }

    #details {
        width: 60%;
        padding: 10px;
    }

    #confirm {
        width: 40%;
        padding: 5px;
        margin-top: 10px;
    }

    #map-area {
        padding-bottom: 40px
    }

}
</style>
