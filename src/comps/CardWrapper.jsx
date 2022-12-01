import Card from './Card'
import LoadingSpinner from './LoadingSpinner'
import './CardWrapper.css'

function CardWrapper({ loadingImgs, imgList }) {

    return (
        loadingImgs ? <LoadingSpinner /> : (
            <main>
                {imgList.length ? (
                    <ul>
                        {imgList.map((imgObj) => <Card imgObj={imgObj} key={imgObj.id} />)}
                    </ul>) : <span className='no-result-text'>Whoops, it looks like there are no results. </span>
                }
            </main>
        )
    )
}

export default CardWrapper