export const ADD_ITEM = Symbol('ADD_ITEM')
export const SUB_ITEM = Symbol('SUBTRACT_ITEM')
export const UPD_ITEM = Symbol('UPDATE_ITEM')
export const BULK_UPLOAD = Symbol('BULK_UPLOAD')

export function addItem(item){
    return {
        type: ADD_ITEM,
        payload: {
            item
        }
    }
}

export function bulkUpload(items){
    return {
        type: BULK_UPLOAD,
        payload: {
            items
        }
    }
}

export function subtractItem(itemId){
    return {
        type: SUB_ITEM,
        payload: {
            id: itemId
        }
    }
}

export function updateItem(id, field, value){
    return {
        type: UPD_ITEM,
        payload: {
            id,
            field,
            value
        }
    }
}