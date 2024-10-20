import { onMounted, ref } from 'vue'

export const useQuery = <Function extends (...args: unknown[]) => unknown>(
  fn: Function,
) => {
  const loading = ref(true)
  const response = ref<Awaited<ReturnType<typeof fn>> | []>([])

  const query = async () => {
    const res = await fn()
    response.value = res

    loading.value = false
  }

  onMounted(query)

  return {
    loading,
    response,
    refetch: query,
  }
}
