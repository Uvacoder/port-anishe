<script>
  import SectionHeading from "./section-heading.svelte";
  import Icon from "./icons/index.svelte";

  export let emailAddress;

  let email;
  let subject;
  let message;

  let contactFormSubmitMessage;

  const submitForm = async () => {
    try {
      contactFormSubmitMessage.textContent = "Sending...";
      const submitRes = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await submitRes.json();
      if (data.error) {
        contactFormSubmitMessage.textContent = "Something went wrong!";
        contactFormSubmitMessage.classList.add("text-red-300");
      } else {
        contactFormSubmitMessage.textContent = "Message sent!";
        contactFormSubmitMessage.classList.add("text-green-300");
      }
    } catch (err) {
      console.error(err);
      contactFormSubmitMessage.textContent = "Something went wrong!";
      contactFormSubmitMessage.classList.add("text-red-300");
    }
  };
</script>

<div data-aos="fade-down">
  <SectionHeading id="contact">Contact</SectionHeading>
  <div
    class="mx-8 md:mx-24 lg:mx-32 xl:mx-40 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start"
  >
    <a
      href={`mailto:${emailAddress}`}
      class="text-accent border-2 border-accent px-4 py-2 rounded-xl hover:text-secondary hover:bg-accent transition duration-200 text-xl md:text-2xl lg:text-3xl mb-8 flex items-center"
      ><Icon iconName="email" className="w-6 h-6 mr-2" />
      <p>Reach out to me on email</p></a
    >
    <form
      class="flex flex-col justify-center lg:justify-start items-center lg:items-start space-y-8 mt-8 lg:mt-2"
      on:submit|preventDefault={submitForm}
    >
      <p class="text-xl text-center lg:text-left text-white">
        Alternatively, you can also fill out the following form:
      </p>
      <div class="flex flex-col">
        <label for="email" class="text-white mb-4"
          >Email <span class="text-red-500"> *</span></label
        >
        <input
          type="email"
          placeholder="john.doe@example.com"
          id="email"
          class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-96 xl:w-[32rem] transition duration-200 hover:border-opacity-60"
          bind:value={email}
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="subject" class="text-white mb-4"
          >Subject <span class="text-red-500"> *</span></label
        >
        <input
          type="text"
          id="subject"
          class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-96 xl:w-[32rem] transition duration-200 hover:border-opacity-60"
          bind:value={subject}
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="text-white mb-4"
          >Message <span class="text-red-500"> *</span></label
        >
        <textarea
          id="message"
          class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-80 xl:w-96 transition duration-200 hover:border-opacity-60"
          rows="10"
          bind:value={message}
          required
        />
      </div>
      <button
        class="bg-accent text-secondary py-2 px-4 rounded-lg hover:opacity-60 transition duration-200"
        type="submit">Send Message</button
      >

      <p bind:this={contactFormSubmitMessage} class="text-white" />
    </form>
  </div>
</div>
