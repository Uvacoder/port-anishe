<script>
  import Socials from "./socials.svelte";
  import data from "../data.json";
</script>

<div
  class="flex flex-col items-center justify-center mt-32 md:mt-48 mx-6 md:mx-0 md:flex-row-reverse md:ml-24 lg:ml-32 xl:ml-48 md:mr-24 lg:mr-36 xl:mr-48 md:justify-start md:items-start md:mb-24 lg:mb-36 xl:mb-48"
  data-aos="fade-down"
>
  <div class="mx-auto mb-12 md:mb-0" data-tilt data-tilt-scale="1.1">
    <img
      src="https://ctohm-edge-resizer.anishde12020.workers.dev/output=auto_w=512_h=512/anishde.dev/images/avatar.jpg"
      alt="Avatar"
      height="24rem"
      width="24rem"
      class="inline-block rounded-full h-auto w-64 md:w-96 lg:w-[32rem] hover:shadow-md hover:shadow-accent transition duration-200"
    />
  </div>
  <div class="flex flex-col items-center md:items-start">
    <p class="text-accent text-2xl md:text-3xl lg:text-4xl font-semibold">
      Hey everyone 👋
    </p>
    <h1
      class="text-gray-100 text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold mt-2"
    >
      I am Anish De
    </h1>
    <p
      class="text-gray-400 mt-4 text-md md:text-lg lg:text-xl xl:text-2xl text-center md:text-left md:w-2/3"
    >
      I am a <span class="text-accent">Fullstack Web Developer</span> who likes
      to build web applications to solve problems. I am self-taught and I am
      always open to <span class="text-accent">learning new things</span>. I
      also like to share my knowledge by writing
      <span class="text-accent">blog posts</span>.
    </p>
    <Socials
      classNames="mt-8 -ml-2 md:ml-0 space-x-2"
      socialsData={data.socials}
    />
  </div>
</div>
