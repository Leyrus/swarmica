import { selector } from 'recoil'
import { fetchInstance } from '../api/instance'
import { InstanceResponse } from '../api/instance/type'

export const instanceSelector = selector<InstanceResponse>({
  key: 'instanceSelector',
  get: async () => {
    const { data } = await fetchInstance()
    return data
  },
})
