<script setup lang="ts" generic="T">
defineProps<{
  list: T[]
  l: number
  c: number | null
  r: number
  target: number
}>()
</script>

<template>
  <ul
    class="flex bg-neutral-100 p-1 text-xs"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      class="flex flex-1 flex-col gap-0.5"
    >
      <span
        class="mx-0.5 overflow-hidden rounded-md border-2 bg-neutral-300 py-1 text-center"
        :class="{
          'border-sky-500': c === index,
          'font-bold text-rose-500': target === item,
        }"
      >
        {{ item }}
      </span>

      <span
        class="border-b-4 border-transparent"
        :class="{
          'border-cyan-500': l <= index && index <= r,
        }"
      />
    </li>
  </ul>
</template>
