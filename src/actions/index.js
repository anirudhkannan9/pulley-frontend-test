export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr || 1
    }
}

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr || 1
    }
}

export const logIn = () => {
    return {
        type: 'LOG_IN'
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}



