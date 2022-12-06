import './ImageForm.css'

function ImageForm() {
    return (
        <section>
            title <br/>
            artist <br/>
            date <br/>
            more info <br/>
            <input type="text" placeholder="tags with commas"/> <br/>
            <input type="file" /> <br/>
            <button type="submit">Save as favourite image</button>
        </section>
    )
}

export default ImageForm