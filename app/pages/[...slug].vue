<template>
  <ContentRenderer
    v-if="data"
    :value="data.page"
  />
</template>

<script setup lang="ts">
import { queryCollection, queryCollectionItemSurroundings, useAsyncData, useRoute } from '#imports'

const route = useRoute()

const { data } = await useAsyncData(route.path, () => Promise.all([
  queryCollection('docs').path(route.path).first(),
  queryCollectionItemSurroundings('docs', route.path, {
    fields: ['title', 'description']
  })
]), {
  transform: ([page, surround]) => ({ page, surround })
})
</script>
