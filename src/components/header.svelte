<script>
  import NavLinks from "./nav-links.svelte";
  import { slide } from "svelte/transition";
  import HeaderLink from "./header-link.svelte";

  let mobileMenuOpen = false;

  const handleHamburgerClick = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };
</script>

<div class="flex justify-center items-center mt-16 mb-16 md:mb-32">
  <nav
    class="bg-secondary/60 shadow-md md:hover:shadow-accent transition duration-200 border-2 border-secondary fixed backdrop-filter z-50 backdrop-blur-xl w-5/6 md:w-auto rounded-xl top-12"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex md:hidden">
          <a
            href="#/"
            class="inline-block items-center my-4 mx-4 rounded-full border-accent border-2 p-1 hover:opacity-60 transition duration-200 ease-in-out"
          >
            <img
              src="https://ctohm-edge-resizer.anishde12020.workers.dev/output=auto_w=96_h=96/anishde.dev/images/icon.png"
              alt="Avatar"
              height="3rem"
              width="3rem"
              class="inline-block rounded-full h-auto w-12"
            />
          </a>
        </div>
        <div class="hidden md:flex items-center my-4">
          <HeaderLink linkHref="#/" linkContent="Home" />
          <NavLinks />
        </div>

        <div class="md:hidden flex items-center">
          <button
            class=" rounded-md hover:opacity-60"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            on:click={handleHamburgerClick}
          >
            {#if mobileMenuOpen}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-accent rounded-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-show="!showMenu"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            {:else}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-accent rounded-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-show="!showMenu"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    {#if mobileMenuOpen}
      <div
        class="flex flex-col space-y-4 my-4"
        transition:slide={{ duration: 200 }}
      >
        <NavLinks />
      </div>
    {/if}
  </nav>
</div>
