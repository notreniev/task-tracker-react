import Button from './Button'

const Header = ({title, name}) => {
const onClick = () => {
    console.log('click');
}

    return (
        <div className="container">
            <header className="header">
                <h1>{title}</h1>
                <Button color="green" text="Add" onClick={onClick}/>
            </header>
        </div>
    )
}

export default Header
