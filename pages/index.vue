<template lang="pug">
  .home
    #hello.section.d-flex.align-items-center
      .container
        .row
          .col.text-center
            .big
              h1#helloTitle.dk HELLO
            h2.mb-5
              | Je suis
              b Marvin,
              small
                span.h3.yellow.paci Guadeloupéen,
                br
                | Développeur
                u.paci &amp;
                |  Créatif.
            //blockquote.bigtext-exempt.blockquote.text-right.pt
            //    p.small.mb-0
            //        i &laquo; En roue arri&egrave;re sur l&apos;autoroute, je relie le Design et le Code. &raquo;
            //        footer.blockquote-footer.paci &Eacute;quilibre.
        .row
          .col.text-center
            a.btn.btn-lg.btn-warning.mb-3(href='#' rel='#moi')
              b Ne clique surtout pas pour aller plus loin
    #moi.section
      .container
        .row.mb-3
          .col
            .big
              h2#effect.dk Effectivement,
            p.h3.text-right.mb-4.mb-md-0
              | mon site peut te laisser un peu
              b
                u perplexe.
            .big
              p.text-center.mb-0
                | Le manque de s&eacute;rieux
                span.dk Volontaire
                span.paci.d-inline-block  &amp;
                span.dk R&eacute;fl&eacute;chi,
            p.text-justify.text-md-center.mb-4.mb-md-0
              i  Le ton utilis&eacute;, la taille des textes, les couleurs, les typos, les listes inutiles et super longues comme celle ci, qui ne s&apos;arr&ecirc;tent pas et n&apos;apportent rien du tout au contenu du site&mldr;
            .big
              p.text-center
                | Ne refl&egrave;tent absolument pas mon
                span.paci.yellow Travail.
        .row.text-center
          .col
            a.btn.btn-lg.btn-outline-warning.mb-3(href='#' rel='#work')
              b Cependant&mldr;
              br
              span.fa.fa-arrow-down.fa-3x.animated.infinite.jackInTheBox.align-middle
    #work.section
      .container
        .row
          .col
            .big
              p.dk.dark-2.text-center
                | J&apos;ai
                u.paci.text-light.align-top s&eacute;rieusement
                |  boss&eacute; sur :
        .row
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fquilivreou.fr') center;")
              .card-body
                h4.card-title QuiLivreO&ugrave;?
                p.card-text
                  | Annuaire des Boutiques en Ligne, qui livrent aux Antilles.
                  i
                    b (MAJ&nbsp;En cours)
                a.btn.btn-outline-primary(href='http://quilivreou.fr' target='_blank')
                  | En voir
                  | plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fquifaitca.fr') center;")
              .card-body
                h4.card-title QuiFait&Ccedil;a?
                p.card-text
                  | Liste des Cr&eacute;atifs Antillais, selectionnez les meilleurs pour vous aider &agrave; r&eacute;aliser vos projets.
                a.btn.btn-outline-primary(href='http://quifaitca.fr' target='_blank')
                  | En
                  | voir plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Ffeysevi.fr') center;")
              .card-body
                h4.card-title F&egrave;yS&egrave;vi
                p.card-text
                  | Plateforme de location de biens entre particuliers.
                  i
                    b (En cours)
                a.btn.btn-outline-primary(href='http://feysevi.fr' target='_blank') En voir plus
          .w-100
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fjauneattitude.fr') center;")
              .card-body
                h4.card-title Jaune Attitude
                p.card-text Blog: Empilement d&apos;id&eacute;es et th&eacute;matiques qui ecombrent mon cerveau curieux.
                a.btn.btn-outline-primary(href='http://jauneattitude.fr' target='_blank') En voir plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fmathmaniac.fr') center;")
              .card-body
                h4.card-title Mathmaniac
                p.card-text
                  | Site et Newsletter d&eacute;veloppement personnel
                  i
                    b - 2017
                a.btn.btn-outline-primary(href='http://mathmaniac.fr' target='_blank')
                  | En
                  | voir plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Flolatelier.fr') center;")
              .card-body
                h4.card-title LoLatelier
                p.card-text Atelier de restoration et m&eacute;tamorphose de mobilier
                a.btn.btn-outline-primary(href='http://lolatelier.fr' target='_blank') En voir plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fsunnybox.fr') center;")
              .card-body
                h4.card-title SunnyBox
                p.card-text
                  | Vous livre chaque mois une s&eacute;lection de produits locaux dans votre bo&icirc;te aux lettres.
                a.btn.btn-outline-primary(href='http://sunnybox.fr' target='_blank') En voir plus
          .w-100
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Funiformdom.fr') center;")
              .card-body
                h4.card-title UniformDom
                p.card-text Centre de formation aux concours des forces de l&apos;ordre
                a.btn.btn-outline-primary(href='http://uniformdom.fr' target='_blank')
                  | En voir
                  | plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fjachetepournous.com') center;")
              .card-body
                h4.card-title J&apos;ach&egrave;te pour Nous
                p.card-text Promotion de l&apos;artisanat d&apos;art antillais
                a.btn.btn-outline-primary(href='http://jachetepournous.com' target='_blank') En voir plus
          .col.mb-3
            .card.dark
              img.card-img-top.img-responsive(height='200' style="background: url('http://www.apercite.fr/api/apercite/320x200/yes/http%3A%2F%2Fhit-lokal.com') center;")
              .card-body
                h4.card-title HitLokal
                p.card-text L&apos;actualit&eacute; musique et clips des antilles
                a.btn.btn-outline-primary(href='http://hit-lokal.com' target='_blank') En voir plus
          .col.mb-3
            .card.bg-warning
              .card-body
                h3.card-title C&apos;est tout ??
                p.card-text.dark
                  b
                    | &Eacute;videmment, il y a aussi tous les projets en cours, non destin&eacute;s au public ou morts&mldr;
                a.btn.btn-lg.btn-danger.animated.infinite.tada(href='#' rel='#contact') Je veux &ecirc;tre dans cette liste
    #contact.section.d-flex.align-items-center
      .container
        .row.mb-3
          .col
            .big
              h2.text-center.paci
                small.dk Ok,parlons
                span.yellow Business !
            p.text-justify.mb-0
              | Ma bo&icirc;te mail attend impatiemment.
              br
              | Alors vas-y, balance moi cette Superbe Id&eacute;e, ce Business Plan presque fini ou cette demande loufoque de site,
              |                     d&apos;appli ou d&eacute;veloppement en tout genre.
              br
              | Tu peux aussi m&apos;envoyer ton avis sur ce site
              i (surtout si tu d&eacute;testes)
            .big.text-center
              a#mail.dk(href='mailto:contact@marvinl.com')
                span.yellow contact
                span.paci.align-top @
                span marvin
                span.yellow L
                span.paci.dark .com
        .row.text-center
          .col
            a.btn.btn-outline-warning.p-3(href='http://facebook.com/marvinLpointCom' target='_blank')
              span.fa.fa-facebook.fa-3x.mb-3
              br
              b MarvinL.com
          .col
            a.btn.btn-outline-success.p-3(href='http://instagram.com/macojaune' target='_blank')
              span.fa.fa-instagram.fa-3x.mb-3
              br
              b @macojaune
          .col.my-md-0.my-3.mb-md-5
            a.btn.btn-outline-warning.p-3(href='https://t.me/shewa66' target='_blank')
              span.fa.fa-telegram.fa-3x.mb-3
              br
              b +590 690 509 598
</template>

<script>

    export default {

    }
</script>

<style>

</style>
