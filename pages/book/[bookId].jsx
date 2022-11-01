import { useRouter } from "next/router";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";

const BookInfo = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.bookId);
    }
  }, [router.isReady]);
  return (
    <>
      <NavBar />
    </>
  );
};

export default BookInfo;
