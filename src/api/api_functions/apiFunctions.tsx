import { ActionType, Book } from "../../components/types/types";
import axiosInstance from "../api";


export const fetchBooks = async (dispatch: any,storedBooks: any,clearStorage:any) => {
    try {
      const response = await axiosInstance.get('/books');
      const fetchedBooks: Book[] = response.data;
      const uniqueFetchedBooks = fetchedBooks.filter(
        (newBook) => !storedBooks.some((storedBook: any) => storedBook.id === newBook.id)
      );
      clearStorage()
      uniqueFetchedBooks.forEach((book: Book) => {
        dispatch({ type: ActionType.ADD_BOOK, payload: book });
      });

      fetchedBooks.forEach((book: Book) => {
        dispatch({ type: ActionType.ADD_BOOK, payload: book });
      });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

