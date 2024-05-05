<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  price: Number,
  imageUrl: String
});
const emits = defineEmits(['selectItem']);

const handleItemClick = () => {
  emits('selectItem', { title: props.title, description: props.description, price: props.price });
};
</script>

<template>
  <div class="col-md-3" @click="handleItemClick">
    <div id="item" class="shadow">
      <div>
        <img class="img" :src="imageUrl" alt="Menu item photo" />
      </div>
      <div>
        <h4>
          <slot name="title"></slot>
        </h4>
        <p>
          <slot name="description"></slot>
        </p>
      </div>
      <div class="price-tag">
        <p>
          <slot name="price"></slot> zł
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color:  var(--menu-item-background);
  color: var(--color-black);
  text-align: center;
  height: 280px;
}

#item:hover {
  cursor: pointer;
  opacity: 0.9;
  border-color: var(--color-green)
}

#item>div:nth-of-type(2) {
  margin-top: 10px;
  text-align: left;
}

.price-tag>p {
  font-weight: 700 !important;
  font-size: 1.4rem;
  color: var(--color-green);
}

img {
  height: 100px;
}

@media screen and (max-width: 900px) {
  #item {
    flex-direction: row;
    padding: 5px;
    height: 120px;
  }

  #item>div {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #item>div:nth-of-type(1) {
    width: 30%;
    align-items: center;
  }

  #item>div:nth-of-type(2) {
    width: 50%;
    padding-left: 10px;
  }

  #item>div:nth-of-type(3) {
    width: 20%;
  }

  img {
    height: auto;
    width: 100%;
  }

  .price-tag>p {
    font-size: 1.2rem;
  }
}
</style>
