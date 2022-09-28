<template>
 
  <div class="products">  
    <the-header v-model="search"></the-header> 
    <v-container fluid>
      <v-row no-gutters>
        <v-col v-for="(product, n) in filteredProducts" :key="n" md="3" sm="6">
          <br />
          <product-card :product="product" />
        </v-col>
      </v-row>
      <the-pagination :pages="this.pages" @update="handleCustomChange">
      </the-pagination>
    </v-container>
  </div>
</template>
<script>
import TheHeader from "@/components/global/TheHeader.vue"
import ProductCard from "@/components/product/ProductCard.vue"
import ThePagination from "@/components/product/ThePagination.vue"
export default {
  name: "products",
  components: { ProductCard, ThePagination, TheHeader },
 
  data() {
    return {
      currentPage: 1,
      searchTimout: null,
      perPage: 4,
      termToSearch: "",
      search:"",
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },

    filteredProducts() {
      // apply pagination
      const endingIndex = this.currentPage * this.perPage
      const startingIndex = endingIndex - this.perPage
      return (this.products ?? [])
        .filter((product) => {
          return product.title
            .toLowerCase()
            .includes(this.termToSearch.toLowerCase())
        })
        .slice(startingIndex, endingIndex)
    },

    pages() {
      return Math.ceil(
        ((this.search?.length > 0 ? this.filteredProducts : this.products)
          ?.length ?? 0) / this.perPage
      )
    },
   
  },

  mounted() {
    this.$store.dispatch("getProducts")

    //this.getProducts()
    //console.log(this.$options.filters)
    //console.log(this.products)
    
  },
  methods: {
    /**
     * async getProducts() {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      this.products = data
    },
     */

    handleCustomChange(v) {
      this.currentPage = v
    },
  },
  watch: {
    search: {
      handler(newVal) {
        if (this.searchTimout) clearTimeout(this.searchTimout)
        this.searchTimout = setTimeout(() => {
          this.termToSearch = newVal
          //console.log(newVal)
          
        }, 1000)
      },
    },
  },
}

</script>
<style></style>