import { useRef } from 'react'
import './stylings/form.scss'

type propsTypes={
    handleAddBook:any,
    length:number
}

const Form: React.FC<propsTypes>=({handleAddBook,length})=>{
    const titleRef=useRef<HTMLInputElement>(null)
    const authorRef=useRef<HTMLInputElement>(null)
    const yearRef=useRef<HTMLInputElement>(null)
    
    const handleSubmit=(e: any)=>{
        e.preventDefault()

        if(titleRef.current &&authorRef.current && yearRef.current){

            const title=titleRef.current.value 
            const author=authorRef.current.value
            const year=yearRef.current.value
            const newBook={
                id:length++,
                title:title,
                author:author,
                year:year
            }
            handleAddBook(newBook)
            titleRef.current.value=''
            authorRef.current.value=''
            yearRef.current.value=''
        }

    }

    return(
    <>
        <h5>Books details form</h5>
        <form className='form' onSubmit={handleSubmit}>
            <div className="inputDivs">
                <div className="input-div">
                    <label htmlFor="title">title</label>
                    <input type="text" id="title" ref={titleRef} name="title" placeholder="Title" required/>
                </div>
                <div className="input-div">
                    <label htmlFor="author">author</label>
                    <input type="text" id="author" ref={authorRef} name="author" placeholder="Author" required/>
                </div>
                <div className="input-div">
                    <label htmlFor="year">year</label>
                    <input type="text" id="year" name="year" ref={yearRef} placeholder="Year" required/>
                </div>
            </div>
            <div className="btn">
                <button className='button' type='submit'> submit</button>
            </div>
        </form>
    </>
    )
}


export default Form
