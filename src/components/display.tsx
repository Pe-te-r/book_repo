// import React, { useState } from 'react'
import './stylings/display.scss'

type Book = {
    id: number,
    title: string,
    author: string,
    year: string
};

type DisplayProps = {
    books: Book[],
    handleDeleteBook: any
};

const Display: React.FC<DisplayProps>=({books,handleDeleteBook})=>{
    return(
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
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td className='btns'>
                                <button className="edit-button">Edit</button>
                                <button className="delete-button" onClick={()=>handleDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
       
    </div>
    )
}

export default Display


