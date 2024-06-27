import axios from "axios";

export async function getImages(search, currentPage) {
    try {
        axios.defaults.baseURL = 'https://pixabay.com/api/';
        const params = {
            key: '44625430-53c6836fb724f6d850fb95d06',
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 15,
            page: currentPage,
        }
        const res = await axios.get('', { params });
        return res.data;
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}