import style from './Header.module.css'

type HeaderProps = {
    fact? : string
};

const Header = ({ fact } : HeaderProps) => {

    return (
        <header className={style.header}>
            <span>React ♥ Redux</span>
            { fact && (
                <span className={style.fact} >Info : {fact}</span>
            )}
        </header>
    );
}

export default Header;