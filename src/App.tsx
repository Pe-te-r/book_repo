import { useReducer } from 'react';
import './App.scss'
import Display from './components/display'
import Form from './components/form'
import { Book, ActionType } from './components/types/types';
import bookReducer from './components/managements/managaement';


const books: Book[]=[
  {
    id:1,
    title:'book1',
    author:'author1',
    year:'year1'
  },
  {
    id:2,
    title:'book2',
    author:'author2',
    year:'year2'
  },
  {
    id:3,
    title:'book3',
    author:'author3',
    year:'year3'
  },
  {
    id:4,
    title:'book4',
    author:'author4',
    year:'year4'
  },
  {
    id:5,
    title:'book5',
    author:'author5',
    year:'year5'
  },
  {
    id:6,
    title:'book6',
    author:'author6',
    year:'year6'
  },
  {
    id:7,
    title:'book7',
    author:'author7',
    year:'year7'
  },
  {
    id:8,
    title:'book8',
    author:'author8',
    year:'year8'
  },
  {
    id:9,
    title:'book9',
    author:'author9',
    year:'year9'
  }
]



function App() {
  const [booksArray, dispatch] = useReducer(bookReducer,books);

  const handleAddBook = (book: Book) => {
    dispatch({ type: ActionType.ADD_BOOK, payload: book });
  };

  const handleDeleteBook = (id: number) => {
    dispatch({ type: ActionType.DELETE_BOOK, payload: { id } });
  };

  return (
    <div className='app'>
      <Form handleAddBook={handleAddBook} length={booksArray.length}/>
      <Display books={booksArray} handleDeleteBook={handleDeleteBook}/>
    </div>
  )
}

export default App