import { customAxios, customAxiosWithAuth } from './api'

export async function getAllCharacters() {
    const axios = customAxios()
    try {
        const response = await axios.get('/characters')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getCharacter(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/characters/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteCharacter(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/characters/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCharacter(character) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/characters', character)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCharacter(id, character) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/characters/${id}`, character)
    } catch(err) {
        console.log(err.message)
    }
}