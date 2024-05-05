<script setup>
import BigTitle from '../components/text/BigTitle.vue'
import CategoryPanel from '../components/CategoryPanel.vue'
import NavigationBar from '../components/NavigationBar.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <BigTitle>
          <template #title>Witaj w RAMI App!</template>
        </BigTitle>
      </div>
      <div id="categories" class="scroll">
        <div class="row">
          <!-- <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Zupy</template>
            </CategoryPanel>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Dania główne</template>
            </CategoryPanel>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Desery</template>
            </CategoryPanel>
          </router-link>
        </div> -->
          <div class="col">
            <router-link :to="{ name: 'Menu' }">
              <CategoryPanel>
                <template #title>Zobacz nasze menu</template>
              </CategoryPanel>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" id="image">
            <img class="img" src="../assets/images/food-image.png" alt="Food image" />
          </div>
          <div class="col-md-6">
            <div id="info">
              <h4>Jak wygląda proces zamawiania?</h4>
              <p>Możesz to zrobić w 3 prostych krokach.</p>
              <ol>
                <li>Wybierasz posiłek z menu</li>
                <li>Wskazujesz lokalizację dostawy</li>
                <li>Potwierdzasz szczegóły zamówienia</li>
              </ol>
              <b> Gotowe!<br> Nasza kuchnia natychmiast zaczyna przygotowywać Twój pyszny posiłek u już po paru minutach
                dostawca
                wyrusza w drogę : )</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <nav>
    <NavigationBar></NavigationBar>
  </nav>
</template>

<style scoped>
#categories {
  margin-top: 0px;
}

#image {
  text-align: center;
}

img {
  max-width: 300px;
}

#info {
  width: 80%;
  color: var(--color-black);
  margin-top: 40px;
}

li {
  font-size: 1.1rem;
}

@media screen and (max-width: 900px) {
  img {
    max-width: 200px;
  }

  #info {
    margin: 0 auto;
  }
}
</style>
