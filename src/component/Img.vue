<script>
import Picture from "./icons/Picture.vue";
export default {
  name: "Img",
  props: {},
  data() {
    return {
      outputs: 0,
    };
  },
  components: {
    Picture,
  },
  methods: {
    handleFileClick() {
      const fileInput = document.getElementById("fileInput");
      fileInput.click();
    },
    handleSelectImage(e) {
      console.log("File input changed", e.target.files);
      const file = e.target.files[0];
      if (file) {
        console.log("Selected file:", file.name);
        this.fileName = file.name;
        // Emit the selected file to the parent component
        this.$emit("fileSelected", file);
      } else {
        console.log("No file selected");
      }
    },
  },
};
</script>

<template>
  <button
    @click="handleFileClick"
    class="w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-md mb-4"
  >
    <Picture v-bind="fileName" />
    <span
      class="block mt-2 mb-4 text-lg leading-normal text-white font-semibold font-sans"
    >
      > Select an image to resize</span
    >
  </button>
  <input
    id="fileInput"
    type="file"
    v-show="false"
    accept="image/*"
    @change="handleSelectImage"
    class="block w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg cursor-pointer"
  />
</template>
