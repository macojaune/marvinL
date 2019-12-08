<template lang="pug">
  #payer.section.d-flex
    .container.align-self-center
      .row.p-4
        .col.text-center
          .big
            h1#helloTitle.dk Payer
              b.display-4.text-danger  {{amount}}€
              |  à MarvinL.com?
          p.h2.mb-5(v-if="!show && typeof name !== 'undefined'") C'est possible 
            u.paci.text-capitalize {{name}}
            |  ! 
          p.h2.mb-5(v-else) Un paiment impromptu ?
            span.paci  Quel bonheur !
          .info(v-show="show")
            h3.mb-3.paci.text-white.text-center Simple comme bonjour
            p.dark-2.pt Insérez vos informations en toute tranquilité.
      .row
        .col.col-12.col-lg-4.offset-lg-4.text-center.mb-4(v-show="!show")
          button.mb-0.btn.btn-block.btn-lg.btn-dark.text-white(@click="showForm()" :disabled="loading") Il suffit de cliquer ici
          i.text-danger.font-weight-bold(v-show="!loading") (simple non ?)
        .col.m-4(v-show="show")
          form#payme-form(@submit="doPay()" @submit.prevent)
            #card-errors.text-danger.font-weight-bold.h5.fadeIn.my-4(role='alert') {{error}}
            #card.p-4.rounded
            .form-group.m-4.text-center
              button.dk.h3.btn.btn-lg.btn-danger(type="submit" :disabled="loading")
                span(v-if="loading")
                  span.spinner-border.spinner-border-sm(role="status" aria-hidden="true" )
                  |  Patience…
                span(v-else) BOOM ! 
</template>

<script>

    export default {
        name: "payer",
        data() {
            return {
                show: false,
                error: '',
                loading: true,
                intent: {},
                amount: this.$route.params.amount || 1000,
                name: this.$route.params.name,
                successUrl: "https://marvinl.com/merci",
                cancelUrl: this.$route.fullPath, // maybe ajouter param cancel (?)
                card: null,
                iconStyle: 'solid',
                style: {
                    base: {
                        iconColor: '#fff',
                        color: '#fff',

                        fontWeight: 500,
                        fontFamily: 'Muli, Roboto, sans-serif',
                        fontSize: '18px',
                        fontSmoothing: 'antialiased',
                        ':-webkit-autofill': {
                            color: '#fce883',
                        },
                        '::placeholder': {
                            color: '#5e8ee0',
                        },
                    },
                    invalid: {
                        iconColor: '#DC3545',
                        color: '#DC3545',
                    },
                },
            }
        },
        async mounted() {
            console.log(this.$route.params)
            await this.initPayment()
            this.loading = false

            const elements = this.$stripe.elements()
            this.card = elements.create('card', {style: this.style})
            this.card.mount('#card')
            this.card.addEventListener('change', ({error}) => {
                this.error = error ? error.message : ""
            })
        },
        methods: {
            async initPayment() {
                try {
                    const {data} = await this.$axios.get(`${process.env.server}/payme`, {
                        params: {
                            amount: this.amount,
                            name: this.name,
                        }
                    })
                    this.intent = data  //todo check error
                } catch (e) {
                    if (e) {
                        alert("Une erreur s'est produite, dis moi ça sur Telegram que je corrige")
                        window.location = "https://t.me/macojaune"
                    }
                }
            },
            showForm() {
                this.show = true
            },
            async doPay() {
                this.loading = true

                const {paymentIntent, error} = await this.$stripe.confirmCardPayment(this.intent.client_secret, {payment_method: {card: this.card}})
                this.loading = false

                if (error) {
                    this.error = error.message
                } else {
                    if (paymentIntent.status === 'succeeded')
                        this.$router.push('/merci')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  #payer
    background-color #ffcf00

    #card
      background-color #2c5fa7

</style>
