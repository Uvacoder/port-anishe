<script>
  export let linkContent;
  export let linkHref;
</script>

<a
  class="text-accent hover:bg-accent hover:text-secondary rounded-lg px-4 py-3 font-semibold font-serif size text-xl mx-4 transition duration-200 ease-in-out"
  href={linkHref}
>
  {linkContent}
</a>
