import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient(
//   {
//   defaultOptions:{
//     queries:{
//       staleTime: 10000, // 10seconds
//       cacheTime: 300 * 1000 // 5 minutes
//     }
//   }
// }
)

export default queryClient