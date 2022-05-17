<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <a
        v-bind:href="item.html_url"
        target="_blank"
        rel="noopener noreferrer"
        >{{ item.title }}</a
      >
    </li>

    <div>{{ $page.frontmatter }}</div>
  </ul>
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
    console.log(this);
    this.getIssue();
    // dynamicly components
    import("./TodoList").then((res) => {
      console.log(res);
    });
  },
  methods: {
    getIssue() {
      return;
      request(`/${this.repo}/issues`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.items = res.map(({ id, title, html_url }) => ({
            id,
            title,
            html_url,
          }));
        });

      fetch("https://api.github.com/repos/kangduu/website/labels");
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
