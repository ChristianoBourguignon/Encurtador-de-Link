import postgres from 'postgres'

export const sql = postgres('postgresql://docker@localhost:5432/encurtadordelink')