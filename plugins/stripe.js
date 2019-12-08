import Vue from 'vue'
import VueStripeCheckout from "vue-stripe-checkout"

Vue.use(VueStripeCheckout, {publishableKey: process.env.stripe.public})

