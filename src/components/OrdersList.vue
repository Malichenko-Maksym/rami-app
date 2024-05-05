<template>
    <div class="card shadow">
        <h4>Historia zamówień</h4>
        <div id="table-container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Produkt</th>
                        <th>Cena</th>
                        <th>Data zamówienia</th>
                        <th>Adres dostawy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in sortedOrders" :key="order.id">
                        <td>{{ order.ordered_dish }}</td>
                        <td>{{ order.order_price }} zł</td>
                        <td>{{ order.order_datetime }}</td>
                        <td>{{ order.order_address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export default {
    name: 'ProfileCard',
    data() {
        return {
            orders: []
        };
    },
    computed: {
        sortedOrders() {
            return this.orders.sort((a, b) => new Date(b.order_datetime) - new Date(a.order_datetime));
        }
    },
    methods: {
        async loadOrders(userId) {
            const db = getFirestore();
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const ordersRef = collection(db, "orders");
                const q = query(ordersRef, where("user_email", "==", user.email));
                const querySnapshot = await getDocs(q);
                this.orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
        }
    },
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await this.loadOrders(user.uid);
            }
        });
    }
};
</script>

<style scoped>
.card {
    margin: 0 auto;
    border-radius: 12px !important;
    padding: 20px;
    background-color: var(--card-background);
}

h4 {
    padding: 10px;
    color: var(--color-black);
}

th {
    font-weight: bold;
    padding: 10px;
}

table, tr, td, th {
  background-color: var(--list-item-color) !important;
  color: var(--color-black);
}


@media screen and (max-width: 900px) {
    .card {
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
    }

    #table-container {
        overflow-x: scroll;
    }
}
</style>