// @flow
import api from '../utils/api'
import { Component } from './types'

export const getComponents = (productId: string): Promise<Component[]> => api.get(`information/ticket_component/components_product?filter.product_id=${productId}`)
