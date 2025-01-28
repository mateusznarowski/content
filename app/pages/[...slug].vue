<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<script setup lang="ts">
import { createError, queryCollection, useAsyncData, useRoute } from '#imports'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content_en').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
