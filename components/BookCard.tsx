import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: Book) => {
    return (
        <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
            <Link href={`/book/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
                <BookCover coverColor={color} coverImage={cover}></BookCover>
                <div>
                    <p className="book-title">{title}</p>
                    <p className="book-genre">{genre}</p>
                </div>
            </Link>
        </li>
    );
};

export default BookCard;