import React from 'react'

const Form = ({ book, setBook }) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{titulo, autor, edicion} = book

    const handleSubmit = () => {
        edicion = parseInt(edicion, 10)
        //validate of datas
        if(titulo === '' || autor === '' || edicion <= 0){
            alert('Todos los cambos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        // Reiniciando state del libro
        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label Htmlfor="title" className='form-label'>Title</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" className='form-control' id="title" />
            </div>
            <div className='mb-3'>
                <label Htmlfor="author" className='form-label'>Autor</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" className='form-control' id="author" />
            </div>
            <div className='mb-3'>
                <label Htmlfor="edition" className='form-label'>Edicion</label>
                <input value={edicion} name="edicion" onChange={handleChange} type="number" className='form-control' id="edition" />
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default Form