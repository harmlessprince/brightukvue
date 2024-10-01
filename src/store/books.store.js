import {defineStore} from "pinia";
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";
import {useLoaderStore} from "@/store/loader.store.js";

export const useBookstore = defineStore("booksStore", () => {

    const books = ref([]);
    const selectedBook = ref(null);
    const loaderStore = useLoaderStore()

    async function getBooks() {
        loaderStore.start()
        const booksRef = collection(database, "books");
        const querySnapshot = await getDocs(booksRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            let defaultBook = null;
            if (Array.isArray(data?.forms)) {
                defaultBook = data?.forms?.find(item => item.default === true);
            }
            if (!defaultBook) {
                defaultBook = {
                    price: data.price ?? 0.0,
                }
            }
            items.push({
                id: doc.id,
                title: data.name,
                summary: data.summary,
                description: data.description,
                forms: data.forms,
                default: defaultBook,
                image: data.image,
            });
        });
        books.value = items;
        loaderStore.done()
    }

    async function getBookById(bookId) {
        loaderStore.start()
        const bookRef = doc(database, "books", bookId);
        const docSnapshot = await getDoc(bookRef);
        // const router = useRouter();
        if (!docSnapshot.exists()) {
            return;
        }
        const data = docSnapshot.data();
        let defaultBook = null;
        if (Array.isArray(data?.forms)) {
            defaultBook = data?.forms?.find(item => item.default === true);
        }
        if (!defaultBook) {
            defaultBook = {
                price: data.price ?? 0.0,
            }
        }
        selectedBook.value = {
            id: bookId,
            title: data.name,
            summary: data.summary,
            description: data.description,
            forms: data.forms,
            default: defaultBook,
            image: data.image,
        }
        loaderStore.done()
    }

    async function findItemInStore(bookId, variation) {
        return books.value.find(item => item.id === bookId && item.variation === variation);
    }

    return {
        getBooks,
        books,
        getBookById,
        selectedBook,
        findItemInStore,
    }
});