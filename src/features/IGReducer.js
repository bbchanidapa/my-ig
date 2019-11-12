const initState = {
    cat: {
        listImage: [],
        isFetching: true,
        error: ''
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_IMAGE_CAT_REQUEST':
            return {
                ...state,
                cat: {
                    ...state.cat,
                    isFetching: true,
                    error: '',
                }
            }
        case 'FETCH_IMAGE_CAT_SUCCESS':
            return {
                ...state,
                cat: {
                    ...state.cat,
                    listImage: [
                        ...state.cat.listImage,
                        action.data
                    ],
                    isFetching: false,
                    data: action.data
                }
            }
        case 'FETCH_IMAGE_CAT_FAILURE':
            return {
                ...state,
                cat: {
                    ...state.cat,
                    isFetching: false,
                    error: action.error
                }
            }
        default:
            return state
    }
}