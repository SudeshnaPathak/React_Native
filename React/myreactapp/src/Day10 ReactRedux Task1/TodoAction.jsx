export const add_todo = (name) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            name: name,
            status: "Pending"
        }
    }
}

export const delete_todo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export const update_todo = (id, updatedFields) => {
    return {
        type: "UPDATE_TODO",
        payload: {
            id: id,
            updatedFields: updatedFields
        }
    }
}