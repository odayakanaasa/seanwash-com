<template>
  <div class="mw7 ph4 center mt4">
    <header>
      <span class="pr2"><icon-wifi></icon-wifi></span>
      <span class="pr2"><icon-headphones></icon-headphones></span>
      <icon-thumbsup></icon-thumbsup>

      <h1 title="(Sean Washington, that is)">Hey, I'm Sean.</h1>

      <h2 class="f4">I'm currently leading the charge as CTO at <a href="https://designkollective.com">Design Kollective</a>, a collective of brick and mortar furniture stores seeking to bring their small businesses online.</h2>
    </header>

    <section>
      <p>By night I'm co-host of <a href="http://spec.fm/doesnotcompute">Does Not Compute</a>, a podcast where I talk with <a href="https://paulstraw.com">Paul Straw</a> about our day to day lives as web developers. To date we've had over 250,000 listens in over 50 countries. You can even <a href="https://dnctopics.life/">search our various episodes by topic</a> if you want!</p>

      <p>My current tools of choice are <a href="https://elixir-lang.org/">Elixir</a>, <a href="http://www.phoenixframework.org/">Phoenix</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, and <a href="https://vuejs.org/">Vue.js</a>.</p>

      <p>You can see what I'm working on at <a href="https://github.com/seanwash">GitHub</a>, what I'm thinking about on <a href="https://twitter.com/seanwashbot">Twitter</a>, and what I'm looking at on <a href="https://instagram.com/seanwash">Instagram</a>. If you'd like to get in touch, don't hesitate to <a href="mailto:hello@seanwash.com">reach out</a>!</p>
    </section>

    <!--
    <section class="mt5">
      <h3>Past Experience</h3>

      <div>
        <h4 class="mb0 f4">Does Not Compute</h4>
        <h5 class="mt0">Host/Teacher</h5>
        <p>Cohost of Does Not Compute with Paul Straw, a podcast about the day to day lives of web developers. Release a weekly episode talking about the latest in technology, pro tips, and insight for junior developers. Logged over 250,000 listens in over 50 countries since release. Facilitate discussions around learning and up-skilling in the spec.fm Does Not Compute slack room.</p>
      </div>

      <div>
        <h4 class="mb0 f4">Octopus</h4>
        <h5 class="mt0">Lead Developer</h5>
        <p>Lead a team of developers with a focus on quality code and clear communication. Implemented code and workflow standards to facilitate consistency in code quality and documentation. Educated designers through coding projects to bridge the gap between design and development.</p>
      </div>

      <div>
        <h4 class="mb0 f4">Octopus</h4>
        <h5 class="mt0">Full Stack Developer</h5>
        <p>Partnered with clients such as Google, Airbnb, Knight Foundation, and CoverHound. Built and deployed 3 Ruby on Rails applications. Delivered true to design templates for Wordpress, Statamic, and Craft CMS installations. Developed custom Wordpress and Craft CMS plugins. Deployed websites and applications alike to Heroku and Digital Ocean using FTP, Rsync, Capistrano, and Git.</p>
      </div>

      <div>
        <h4 class="mb0 f4">Freelance</h4>
        <h5 class="mt0">Web Designer/Developer</h5>
        <p>Focused on standards based Front-End web development. Worked with designers to deliver true to the design Wordpress & Expression Engine themes using HTML, CSS, and JavaScript. Provided Front-End maintenance and feature implementations for Rails apps.</p>
      </div>
    </section>
    -->
  </div>
</template>

<script>
import IconWifi from '~components/icons/wifi.vue'
import IconThumbsup from '~components/icons/thumbsup.vue'
import IconHeadphones from '~components/icons/headphones.vue'

export default {
  components: {
    IconWifi,
    IconThumbsup,
    IconHeadphones
  },

  head: {
    title: 'Full Stack Developer'
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 1.6;
}

a {
  color: #000;
  font-weight: bold;
}
</style>

