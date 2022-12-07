import './ImageForm.css'

function ImageForm({imgObj}) {
    
    return (
        <section className='imageForm'>
            title <br/>
            artist <br/>
            date <br/>
            more info url<br/>
            <input type="text" placeholder="tags"/> <br/>
            
            <button type="submit">Save as favourite image</button>
        </section>
    )
}

export default ImageForm