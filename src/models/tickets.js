// @flow
import api from '../utils/api'
import { Ticket } from '../models/types'

export const getTickets = (): Promise<Ticket[]> => api.get('information/ticket')

export const getTicket = (id: string): Promise<Ticket> => api.get(`information/ticket/${id}`)

export const createTicket = (data): Promise<Ticket> => api.post('information/ticket', data)
