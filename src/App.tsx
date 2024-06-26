import { useEffect, useReducer } from 'react';
import './App.scss'
import Display from './components/display'
import Form from './components/form'
import { Book, ActionType } from './components/types/types';
import bookReducer from './components/managements/managaement';
import UseLocalStorage from './custom_hook/customHook';
import axiosInstance from './api/api';
import { fetchBooks } from './api/api_functions/apiFunctions';


const books: Book[]=[]



function App() {
  const [storedBooks, setStoredBooks] = UseLocalStorage('books', books);
  const [booksArray, dispatch] = useReducer(bookReducer,storedBooks);

  useEffect(() => {
    setStoredBooks(booksArray);  
  }, [booksArray, setStoredBooks]);


  const handleAddBook =async (book: Book) => {
    try {
      const book_exists = booksArray.find(book=>book.id === Number(book))
      if(book_exists){
        alert('Book already exists')
        }
        dispatch({ type: ActionType.ADD_BOOK, payload: book });
        await axiosInstance.post('/books', book);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id: number) => {
    dispatch({ type: ActionType.DELETE_BOOK, payload: { id } });
    try {
       await axiosInstance.delete(`/books/${id}`);
    } catch (error) {
        console.error('Error deleting book:', error);
    }
  };

  const handleEditBook =async(book: Book) => {
    dispatch({ type: ActionType.EDIT_BOOK, payload: book });
    try {
      await axiosInstance.put(`/books`, book);
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  useEffect(() => {
    fetchBooks(dispatch,storedBooks);
  }, []);

  return (
    <div className='app'>
      <Form handleAddBook={handleAddBook} length={booksArray.length}/>
      <Display books={booksArray} handleDeleteBook={handleDeleteBook} handleEditBook={handleEditBook}/>
    </div>
  )
}

export default App
