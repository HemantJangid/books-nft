import BookCard from "../components/BookCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { BOOKS } from "../constants";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 mt-10">
        <Header />
        <div className="mt-16 flex flex-wrap justify-start">
          {BOOKS.map((book) => {
            return <BookCard info={book} key={book.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
