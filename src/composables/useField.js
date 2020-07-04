import { inject } from '@vue/composition-api'

export const useField = () => {
  const type = inject("type");

  return { type }
}

export const props = [
  "props"
]