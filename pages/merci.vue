<template lang="pug">
  #merci.section.d-flex
    .thanks.p-5.align-self-center
      h1.dk MERCI
      p.text-white Il y a exactement 1 million de mercis sur cette page.
    .container-fluid
      .row.d-flex
        .col.p-0.overflow-hidden
          .millions
            span(v-for="i in 1000") merci
            p.text-center.h2
              b T'allais vraiment les compter là ? 😐😐
</template>

<script>
    export default {
        name: "merci",
        data() {
            return {
                thanks: ""
            }
        },
        async created() {
            // const {data} = await this.$axios.get(`${process.env.server}/thanks`)
            // this.thanks = data
        }
    }
</script>

<style lang="stylus" scoped>
  #merci
    background-color  #fc6076
  .thanks
    background-color #41b883
    position absolute
    top 150px
    z-index 2

  .millions
    z-index 1

  span
    display inline-block
    position relative
    margin-left 6px
    -webkit-animation: 0.1s arrow2 infinite ease;
    -o-animation: 0.1s arrow2 infinite ease;
    animation: 0.1s arrow2 infinite ease;

</style>
