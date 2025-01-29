<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content'

import { createError, queryCollection, useAsyncData, useRoute } from '#imports'

const route = useRoute()

const getCurrentLocale = () => {
  const segments = route.path.split('/').filter((segment) => segment)
  const prefix = segments[0]

  if (!prefix) return 'en'
  if (['pl'].includes(prefix)) {
    return 'pl'
  }

  return 'en'
}

const getCollectionByLocale = (locale: string) => {
  return ('content_' + locale) as keyof Collections
}

const { data: page } = await useAsyncData(route.path, () => {
  const collection = getCollectionByLocale(getCurrentLocale())
  return queryCollection(collection).path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
