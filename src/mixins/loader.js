export default {
  data() {
    return {
      loader: null,
    };
  },
  watch: {
    isLoading(isLoading) {
      this.handleLoader(isLoading);
    },
    loading(isLoading) {
      this.handleLoader(isLoading);
    },
  },
  methods: {
    handleLoader(isLoading) {
      if (isLoading) {
        this.loader = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
        });
      } else {
        this.loader?.close();
      }
    },
  },
};
