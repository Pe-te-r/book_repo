// // import React, { useState } from 'react'
// import './stylings/display.scss'

// type Book = {
//     id: number,
//     title: string,
//     author: string,
//     year: string
// };

// type DisplayProps = {
//     books: Book[],
//     handleDeleteBook: any
//     handleEditBook: any
// };

// const Display: React.FC<DisplayProps>=({books,handleDeleteBook,handleEditBook})=>{
//     return(
//     <div className='dispaly'>
//         <table>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Author</th>
//                         <th>Year</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {books.map((book, index) => (
//                         <tr key={index}>
//                             <td>{book.title}</td>
//                             <td>{book.author}</td>
//                             <td>{book.year}</td>
//                             <td className='btns'>
//                                 <button className="edit-button" onClick={handleEditBook}>Edit</button>
//                                 <button className="delete-button" onClick={()=>handleDeleteBook(book.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
       
//     </div>
//     )
// }

// export default Display


import React, { useState } from 'react';
import './stylings/display.scss';

type Book = {
    id: number,
    title: string,
    author: string,
    year: string
};

type DisplayProps = {
    books: Book[],
    handleDeleteBook: (id: number) => void,
    handleEditBook: (book: Book) => void
};

const Display: React.FC<DisplayProps> = ({ books, handleDeleteBook, handleEditBook }) => {
    const [editingBookId, setEditingBookId] = useState<number | null>(null);
    const [editedBook, setEditedBook] = useState<Book | null>(null);

    const handleEditClick = (book: Book) => {
        setEditingBookId(book.id);
        setEditedBook({ ...book });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(editedBook){
            const { name, value } = e.target;
            console.log(name, value);
            
            setEditedBook({...editedBook, [name]: value });
        }
        

    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editedBook) {
            console.log(editedBook)
            handleEditBook(editedBook);
            setEditingBookId(null);
            setEditedBook(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingBookId(null);
        setEditedBook(null);
    };

    return (
        <div className='dispaly'>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            {editingBookId === book.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="title"
                                            value={editedBook?.title || ''}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="author"
                                            value={editedBook?.author || ''}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="year"
                                            value={editedBook?.year || ''}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td className='btns'>
                                        <button className="edit-button" onClick={handleEditSubmit}>Save</button>
                                        <button className="delete-button" onClick={handleCancelEdit}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.year}</td>
                                    <td className='btns'>
                                        <button className="edit-button" onClick={() => handleEditClick(book)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDeleteBook(book.id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Display;
