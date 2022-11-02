import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "web3uikit";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { BOOKS } from "../../constants";

const BookInfo = () => {
  const router = useRouter();
  const bookInfo = BOOKS[router.query.bookId - 1];
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.bookId);
    }
  }, [router.isReady]);
  return (
    <>
      {bookInfo ? (
        <>
          <NavBar />
          <div className="container m-auto mt-12 px-4 py-2 flex flex-col w-full">
            <h1 className="text-6xl font-extrabold">{bookInfo.name}</h1>
            <div className="container m-auto mt-12 flex">
              <img
                src={bookInfo.image}
                className="w-2/5 rounded-2xl"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="w-1/2 mt-2 p-4 pl-14 pb-0 flex justify-between items-start">
                <div>
                  <h2 className="text-5xl font-extrabold">{bookInfo.author}</h2>
                  <p className="text-slate-500 text-3xl mt-3 font-bold">
                    {bookInfo.genre}
                  </p>

                  <p className="text-xl font-regular text-slate-500 mt-6">
                    {bookInfo.description}
                  </p>

                  <div className="flex flex-row justify-between items-center m-0 mt-20 p-0">
                    <Button
                      // onClick={handleBookClick}
                      size="large"
                      isFullWidth
                      text={`Buy for ${bookInfo.price} Matic`}
                      theme="outline"
                    />
                    <div className="w-5"></div>
                    <Button
                      // onClick={handleBookClick}
                      size="large"
                      isFullWidth
                      text={`Rent for ${bookInfo.rent} Matic`}
                      theme="outline"
                    />
                  </div>

                  <p className="text-sm font-regular text-slate-500 mt-3">
                    *Note: Rent period is 2 days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div>Book not found</div>
      )}
    </>
  );
};

export default BookInfo;
