<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { algorithm } from '../modules/algorithm'
import { oneDark } from '@codemirror/theme-one-dark'
</script>

<template>
  <Codemirror
    disabled
    :extensions=" [javascript(), oneDark]"
    :modelValue="algorithm"
  />
</template>
