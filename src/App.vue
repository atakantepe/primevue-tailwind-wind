<template>
  <div
    class="min-h-screen bg-surface-0 dark:bg-surface-900 bg-gradient-to-tl from-surface-0 to-surface-50 dark:from-black dark:to-surface-700/80  p-8 flex items-center justify-center transition-colors duration-200"
  >
    <div
      class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8"
    >
      <DarkToggle />
      <ColorPalette />
    </div>

    <div
      class="p-12 text-center shadow-md bg-gradient-to-tl from-surface-0 to-surface-50 dark:from-surface-900 dark:to-surface-700/60 dark:border dark:border-surface-700 rounded-md"
    >
      <h1
        class="text-4xl font-extralight text-surface-700 dark:text-surface-0/80 mb-4"
      >
        PrimeVue Tailwind Wind Preset
      </h1>
      <span class="text-xl font-light text-surface-700 dark:text-surface-0/80">
        "Showcase for components to be added soon."
      </span>
     
    </div>
  </div>
</template>

<script setup>
import DarkToggle from "./components/DarkToggle.vue";
import ColorPalette from "./components/ColorPalette.vue";
</script>
