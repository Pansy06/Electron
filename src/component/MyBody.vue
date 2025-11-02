<script>
import Img from "./Img.vue";
import Info from "./Info.vue";

export default {
  name: "MyBody",
  data() {
    return {
      selectedFile: null,
      width: "",
      height: "",
    };
  },
  components: {
    Img,
    Info,
  },
};
</script>

<template>
  <div class="p-4">
    <Img @fileSelected="(file) => (selectedFile = file.name)" />

    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-white mb-2 font-sans"
          >Width</label
        >
        <input
          type="number"
          class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter width"
          v-bind="{
            value: width,
            onInput: (e) => (width = e.target.value),
          }"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-white mb-2 font-sans"
          >Height</label
        >
        <input
          type="number"
          class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter height"
          v-bind="{
            value: height,
            onInput: (e) => (height = e.target.value),
          }"
        />
      </div>
      <button
        @click="
          () => {
            // Handle the resize logic here
          }
        "
        type="submit"
        class="font-sans w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        Resize
      </button>
    </form>
    <Info v-bind="{ fileName: selectedFile, outputs }" />
  </div>
</template>
