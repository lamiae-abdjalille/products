<template>
  <nav>
    <v-toolbar fluid>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="8">
            <router-link
              to="/"
              class="mx-3 text-decoration-none black--text text-h4"
              >Products</router-link
            >
            <v-spacer></v-spacer>
          </v-col>

          <v-col cols="3">
            <v-text-field
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              v-model="searchText"
              filled
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <router-link :to="{ name: 'cart'}">
              <v-btn large icon>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <v-badge right color="blue lighten-1">
                  <span slot="badge">{{ cartItemCount }}</span>
                </v-badge>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
  </nav>
 
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    searchText: {
      get() {
        this.value
      },
      set(val) {
        this.$emit("input", val)
      },
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount
    },
  },
  methods: {
    goToCart() {
      this.$router.push("cart")
    },
 
  },
}

</script>
<style>
.v-input__slot {
  background-color: white !important;
}
.v-input__slot:before {
  border-color: white !important;
}
</style>