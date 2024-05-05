<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import BigTitle from '../components/text/BigTitle.vue'
import MenuList from '../components/MenuList.vue'
</script>

<template>
  <main class="background-main">
    <div class="container">
      <div class="row">
        <div class="row">
          <router-link :to="{ name: 'Home' }">
            <ReturnArrow></ReturnArrow>
          </router-link>
        </div>
        <BigTitle>
          <template #title>MENU</template>
        </BigTitle>
      </div>
      <div class="row" id="menu-container">
        <MenuList />
      </div>
    </div>
  </main>
</template>

<style scoped>
#menu-container {
  margin-bottom: 60px;
}
</style>
