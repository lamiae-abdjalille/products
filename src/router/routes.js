import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import Cart from '@/views/Cart.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => {
            return import(/* webpackChunkName: "about" */ '@/views/Products.vue')
    }
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },

]

export default routes