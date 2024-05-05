<script setup>
import AppLogo from '../components/images/AppLogo.vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = useRouter();
const auth = getAuth();

const navigateUser = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // If user is logged in, redirect to Home
      router.push({ name: 'Home' });
    } else {
      // If user is not logged in, redirect to Login 
      router.push({ name: 'Login' });
    }
  });
};

</script>

<template>
  <main class="background-main-2">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <AppLogo />
          <button type="button" class="btn" @click="navigateUser">Start</button>
        </div>
        <div class="col-md-4">
          <div id="authors">
            <h5>Autorzy:</h5>
            <p>Michał Warszawski<br>
              Rafał Małucha<br>
              Maksym Malichenko</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#authors {
  margin-top: 100px;
  color: var(--color-black);
}

h5 {
  font-weight: 600;
}

main {
  padding-top: 150px;
}

.row>div:nth-of-type(1) {
  text-align: center;
}

@media only screen and (max-width: 900px) {
  main {
    padding-top: 50px;
  }

  .row>div:nth-of-type(1) button {
    margin-top: 100px;
  }

  .row>div:nth-of-type(2) {
    text-align: center;
  }

}
</style>
