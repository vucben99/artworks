import Card from './Card'
import Search from './Search'
import LoadingSpinner from './LoadingSpinner'
import './CardWrapper.css'

function CardWrapper({ loadObjectIDs, loadingImgs, imgList }) {



    return (
        loadingImgs ? <LoadingSpinner /> :
            <main>
                <Search loadObjectIDs={loadObjectIDs} />
                <ul>
                    {imgList.map((imgObj) => <Card imgObj={imgObj} key={imgObj.id} />)}
                </ul>
            </main>
    )
}

export default CardWrapper