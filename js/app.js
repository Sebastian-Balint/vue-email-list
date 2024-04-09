const { createApp } = Vue;

createApp({
  data() {
    return {
      numeri: [],
    };
  },
  methods: {
    randomMail() {
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            console.log(res.data.response);
            this.numeri.push(res.data.response);
          });
      }
    },
  },
  created() {
    this.randomMail();
  },
}).mount("#app");
