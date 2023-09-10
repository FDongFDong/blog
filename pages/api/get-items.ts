import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_sZFad1Fkr0p7jt5SPrxxPuloy0pXQaq5YcviiIhJImv',
})

const databaseId = 'eb83224fa7e64aac8229b7737efaafb3'

async function getItem() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'price',
          direction: 'ascending',
        },
      ],
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

// const databaseId

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await getItem()
    res.status(200).json({ items: response?.results, message: `Sucess` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
