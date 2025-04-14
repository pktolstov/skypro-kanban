import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'
export async function fetchCards({ token }) {
    try {
        if (!isNetworkAvailable()) {
            throw new Error('Сеть недоступна')
          }
      
        const data = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        return data.data.tasks
        // когда работаем с axios, не забываем, что результат лежит в ключе datа
    } catch (error) {
        throw new Error(error.message)
    }
}

const isNetworkAvailable = () => {
    return navigator.onLine
  }

export async function postCard({ token, card }) {
    try {
        if (!isNetworkAvailable()) {
            throw new Error('Сеть недоступна')
          }
      
        const data = await axios.post(API_URL, card, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function editCard({ token, id, card }) {
    try {
        if (!isNetworkAvailable()) {
            throw new Error('Сеть недоступна')
          }
      
        const data = await axios.put(API_URL + '/' + id, card, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function deleteCard({ token, id }) {

    try {
        if (!isNetworkAvailable()) {
            throw new Error('Сеть недоступна')
          }
        const data = await axios.delete(API_URL + '/' + id,{
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}