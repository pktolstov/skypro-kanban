import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'
export async function fetchCards({ token }) {
    try {
        const data = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        return data.data
        // когда работаем с axios, не забываем, что результат лежит в ключе datа
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function postCard({ token, card }) {
    try {
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
        const data = await axios.patch(API_URL + id, card, {
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

// Апи изменяет данные задачи.
// Адрес: https://wedev-api.sky.pro/api/kanban/:id
// Вместо :id нужно передать id задачи, данные которой нужно изменить. 
// Например /kanban/64253cdbca1ce2a815a327d3
// Метод: PUT
// Принимает данные задачи, описанной в формате JSON, например:

// Если заголовок не был введен, то по умолчанию устанавливается значение "Новая задача". 
// Если тема не была введена, то по умолчанию устанавливается значение "Research". 
// Если статус не был введен, то по умолчанию устанавливается значение "Без статуса". 
// Если не было добавлено описание, то по умолчанию устанавливается пустая строка. 
// Если дата не была введена, то по умолчанию устанавливается текущая дата.

// Возвращает статус код 201 и обновленный список задач, например: