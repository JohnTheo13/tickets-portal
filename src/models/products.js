// @flow
import api from '../utils/api'
import { Product } from './types'

export const getProducts = (): Promise<Product[]> => api.get('information/ticket_product')
