<script setup>
import AppLogo from '../components/images/AppLogo.vue'
import BigTitle from '../components/text/BigTitle.vue'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main class="background-main-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <AppLogo />
        </div>
        <div class="col-md-6">
          <div id="login-cart">
            <BigTitle>
              <template #title>Zaloguj się</template>
            </BigTitle>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-top: 150px;
}

img {
  width: 350px;
  margin: 0 auto;
  margin-top: 100px;
}

#login-cart {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #e5e5e5;
  background-color: var(--card-background);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
}

h3 {
  margin-bottom: 40px;
  text-align: center;
}

@media only screen and (max-width: 900px) {
  main {
    padding-top: 50px;
  }

  img {
    width: auto;
    margin-top: 0px;
    margin-bottom: 50px;
  }

  #login-cart {
    width: 85%;
  }

  #login-cart {
    border: none;
    padding: 0px 20px;
    box-shadow: none;
  }
}
</style>
