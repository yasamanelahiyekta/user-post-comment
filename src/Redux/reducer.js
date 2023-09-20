export const users = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getUsers":

            return payload;

        default:
            return state;
    }
}
export const posts = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getPosts":

            return payload;

        default:
            return state;
    }
}
export const comments = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getComments":

            return payload;

        default:
            return state;
    }
}