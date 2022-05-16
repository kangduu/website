<template>
  <div>
    <h3>Github Issue !</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <a
          v-bind:href="item.html_url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GithubIssueList",
  props: {
    repo: {
      type: String,
      required: false,
      default: "front-end-interview",
    },
    // number: {
    //   type: Number,
    //   required: true,
    // },
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getIssue();
  },
  methods: {
    getIssue() {
      console.log(this.repo);
      const url = `https://api.github.com/repos/kangduu/${this.repo}/issues`;
      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.items = res.map(({ id, title, html_url }) => ({
            id,
            title,
            html_url,
          }));
        });
    },
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  cursor: pointer;
}
</style>
