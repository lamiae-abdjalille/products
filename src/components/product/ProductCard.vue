<template>
  <v-card class="mx-2">
    <v-img contain class="white--text" height="300px" :src="product.image">
    </v-img>
    <v-card-title>
      <div class="mx-5">
        <router-link :to="{ name: 'product', params: { id: product.id } }">{{
          product.title
        }}</router-link>
        <!--
         <span class="title blue--text">{{
          product.title.substring(0, 20) + ".."
        }}</span>
      -->
        <br />

        <span class="title"> {{ product.price }}&nbsp$</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        large
        round
        depressed
        class="mx-auto"
        :id="product.id"
        @click="addToCart()"
        >ADD TO CART</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      })
    },
  },
}
</script>