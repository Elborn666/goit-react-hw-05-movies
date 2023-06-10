import { useState } from 'react';
import css from './Form.module.css'

const Form = ({ setSearchParams }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        setSearchParams({ query });
    };

    const handleSearchParams = ({ target: { value } }) => {
        setQuery(value);
    };
    return (
        <main>
            <div className={css.container}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <input
                        className={css.input}
                        onChange={handleSearchParams}
                        value={query}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies">
                    </input>
                    <button type="submit" className={css.button}>Serach</button>
                </form>
            </div>
        </main>
    )
    };

export default Form 

