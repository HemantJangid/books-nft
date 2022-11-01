import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "web3uikit";

const BookCard = ({ info }) => {
  const router = useRouter();

  const handleBookClick = () => {
    router.push(`/book/${info.id}`);
  };

  return (
    <div className="w-80 h-50 rounded-xl overflow-hidden bg-white m-2">
      <Image
        style={{ maxHeight: "200px", objectFit: "cover" }}
        src={info.image}
        alt="Book Cover"
        layout="responsive"
        width={200}
        height={100}
      />
      <div className="mt-2 p-4 pb-0 flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-base text-slate-500">
            {info.name}
          </h2>
          <h2 className="text-2xl font-bold">{info.author}</h2>
          <p className="text-slate-500 text-sm">{info.genre}</p>
        </div>
        <div>
          <h2 className="font-semibold text-slate-500">Matic</h2>
          <p className="text-2xl font-bold">{info.price}</p>
        </div>
      </div>

      <Button
        color="blue"
        onClick={handleBookClick}
        size="large"
        text="Info"
        theme="colored"
        style={{ margin: "1rem" }}
      />
    </div>
  );
};

export default BookCard;
