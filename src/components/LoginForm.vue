<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const router = useRouter();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signIn = async (event) => {
      event.preventDefault();
      const email = document.getElementById("inputEmail1").value;
      const password = document.getElementById("inputPassword").value;
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
        router.push({ name: 'Home' });
      } catch (error) {
        console.error(error.code, error.message);
        alert("Błędne dane do logowania!");
      }
    };

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        // You can access the Google Access Token if you need to access the Google API
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        console.log(result);
        router.push({ name: 'Home' });
      } catch (error) {
        console.error(error.code, error.message);
      }
    };

    return { signIn, signInWithGoogle };
  }
});
</script>

<template>
  <form @submit="signIn">
    <div class="mb-3">
      <input type="email" class="form-control" id="inputEmail1" placeholder="E-mail">
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    <button type="submit" class="btn">Zaloguj się</button>
  </form>
  <p>lub skorzystaj z:</p>
  <button class="btn google" @click="signInWithGoogle">GOOGLE</button>
</template>

<style scoped>
p {
  margin-top: 40px;
  color: var(--color-black);
}

.google {
  color: blue !important;
  background-color: white !important;
  border: 1px solid blue !important;
  margin-top: 0px;
  margin-bottom: 40px;
}
</style>