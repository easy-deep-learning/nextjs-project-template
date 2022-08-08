import useSWR from 'swr'

const fetcher = (id?: string) => {
  if (id) {
    return fetch(`/api/templateCRUD/${id}`)
      .then(response => response.json())
      .then(result => result.data)
      .catch(error => {
        console.error(error)
      })
  }
}

const useFetchTemplateCRUDItem = (id?: string) => {
  const { data, error } = useSWR(id, fetcher)

  return {
    item: data,
    isLoading: !error && !data,
    error
  }
}

export default useFetchTemplateCRUDItem
