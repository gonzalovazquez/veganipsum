/**
 * Returns a promise with from the Cluster API
 * @returns Promise
 */
export default async () => {
  const res = await fetch('//jsonplaceholder.typicode.com/todos')
  return res.json()
}
