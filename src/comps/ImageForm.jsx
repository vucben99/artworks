import './ImageForm.css'

function ImageForm({imgObj}) {
    
    return (
        <section className='imageForm'>
            title <br/>
            artist <br/>
            date <br/>
            more info <br/>
            <input type="text" placeholder="comments"/> <br/>
            <input type="file" /> <br/>
            <button type="submit">Save as favourite image</button>
        </section>
    )
}

export default ImageForm