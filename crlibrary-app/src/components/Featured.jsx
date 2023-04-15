import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from './ui/Book';
import { books } from '../data'

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                        <div className="books">
                            {books
                                .filter((book) => book.rating === 5)
                                .slice(0, 4)
                                //slice is going from the first index to the fourth index, since I want to show 4 books on the page
                                .map((book) => (
                                    <Book book={book} key={book.id}/>
                                ))
                                }

                        </div>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Featured