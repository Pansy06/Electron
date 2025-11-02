<script>
export default {
  name: "Info",
  props: {
    fileName: {
      type: String,
      default: "No file selected",
    },
    outputs: {
      type: String,
      default: "/",
    },
  },
};
</script>

<template>
  <div class="mt-6 flex flex-col items-center font-sans text-white text-sm">
    <div class="font-semibold">
      File: <span class="font-normal">{{ fileName }}</span>
    </div>
    <div class="font-semibold">
      Outputs: <span class="font-normal">{{ outputs }}</span>
    </div>
  </div>
</template>
