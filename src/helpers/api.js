const url = 'https://reqres.in/api/users?page=';

export const getData = async (page) => {
    const urlSelect = url + page
    try {
        const resp = await fetch(urlSelect);
        const data = await resp.json();
        return data.data
    } catch (error) {
        console.log(error);
    }
}