import React from "react";
import { books } from '../data'
import Book from "./ui/Book"

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2>Discounted <span className="purple">Books</span></h2>
                    </div>
                    <div className="books">
                        {books.filter(book => book.salePrice > 0)
                            // if the salePrice is greater than 0 it will show it
                            .slice(0, 8)
                            //take the first 8 elements of an array
                            .map((book) => (
                                <Book book={book} key={book.id} />
                                //turns it into an actual book
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted