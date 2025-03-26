import { api } from '../api'
import { InstanceResponse } from './type'

export const fetchInstance = () => api.get<InstanceResponse>('/instance/')
