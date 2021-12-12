<script context="module">
  export const load = async ({ fetch, page }) => {
    const res = await fetch('/pages.json')
    if (res.ok) {
      const pages = await res.json()
      return {
        props: {
          pages,
          key: page.path,
        },
      }
    }
  }
</script>

<script>
  import Footer from '$lib/components/footer.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })

  export let pages
</script>

<Navbar {pages} />

<main class="container max-w-3xl mx-auto px-4">
  <slot />
</main>

<Footer />
