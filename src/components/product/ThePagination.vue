<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="this.pages"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @input="changePage"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  name: "ThePagination",
  props: {
    pages: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      perPage: 4,
      page: 1,
    }
  },

  methods: {
    changePage(pageNumber) {
      this.page = pageNumber
      // console.log(pageNumber)
      this.$emit("update", pageNumber)
    },

    next() {
      if (this.page + 1 <= this.pages) {
        this.changePage(this.value + 1)
      }
    },
    previous() {
      if (this.page - 1 >= 1) {
        this.changePage(this.value - 1)
      }
    },
  },

  computed: {},

  watch: {},
}
</script>