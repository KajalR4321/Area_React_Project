
import client1 from "../../assets/Logo/Logo-1.svg";
import client2 from "../../assets/Logo/Logo-2.svg";
import client3 from "../../assets/Logo/Logo-3.svg";
import client4 from "../../assets/Logo/Logo-4.svg";
import client5 from "../../assets/Logo/Logo-5.svg";
import client6 from "../../assets/Logo/Logo-6.svg";

const client_array = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
];
const Client = () => {
  return (
    <section >
      <header>
        <h2 className="text-text text-sm ml-17  mb-1">Trusted by</h2>

      </header>
      <div className="flex item-center flex-wrap lg:flex-nowrap justify-center gap-10 mb-14">
        {client_array.map((item, index) => (
          <div key={index + 1}>
            <img
              src={item}
              alt={`client${index + 1}`}
              loading="lazy"
              fetchPriority="auto"
              width={180}
              height={140}
              className="w-28 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Client;
