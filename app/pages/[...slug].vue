<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import { computed } from 'vue'

import { createError, queryCollection, useAsyncData, useRoute } from '#imports'

const route = useRoute()

const slug = computed(() => withLeadingSlash(String(route.params.slug).replace(/,/g, '/')))

const { data: page } = useAsyncData('page' + slug.value, () => {
  return queryCollection('content').path(slug.value).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
