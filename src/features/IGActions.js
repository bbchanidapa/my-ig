import axios from 'axios'

export const getImageCat = () => (dispatch) => {
    console.log('getImageCat')
    dispatch({ type: 'FETCH_IMAGE_CAT_REQUEST' })
    return axios.get('http://aws.random.cat/meow')
        // .then(res =>
        // setImg([res.data])
        // )
        .then((res) => {
            dispatch({ type: 'FETCH_IMAGE_CAT_SUCCESS', data: res.data })
        })
        .catch((error) => {
            dispatch({
                type: 'FETCH_IMAGE_CAT_FAILURE',
                error: error
            })
        })
}