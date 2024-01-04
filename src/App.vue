<script setup lang="ts">
import { computed, ref } from 'vue'
import { generateBinarySearchSteps } from './modules/binary-search'
import Step from './components/Step.vue'
import { algorithm } from './modules/algorithm'

const length = ref(35)
const list = computed(() => (
  Array.from({ length: length.value })
    .map((_, index) => index)
))
const target = ref(15)

const steps = computed(() => {
  const targetValue = target.value

  return generateBinarySearchSteps(
    list.value,
    (item) => (item >= targetValue)
  )
})
</script>

<template>
  <div class="container flex flex-col gap-4 py-4">
    <form>
      <label>
        list length:
        <input v-model.number="length" class="border" type="number">
      </label>
      <label>
        target:
        <input v-model.number="target" class="border" type="number">
      </label>
    </form>

    <div class="flex flex-col">
      <Step
        v-for="{ l, c, r, id } in steps"
        :key="id"
        :c="c"
        :l="l"
        :list="list"
        :r="r"
        :target="target"
      />
    </div>

    <article class=" flex flex-col gap-4">
      <ul class="list-inside list-disc">
        <li>
          <code>l</code> 會停在第一個達成的項目，或是從來沒有達成的話會停在最後一項
        </li>
      </ul>
      <hr>
      <pre>{{ algorithm }}</pre>
    </article>
  </div>
</template>
