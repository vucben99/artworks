import Card from './Card'
import Search from './Search'
import './CardWrapper.css'

function CardWrapper() {



    return (
        <main>
            <Search />
            <ul>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </main>
    )
}

export default CardWrapper