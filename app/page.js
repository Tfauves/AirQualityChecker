import AirData from "./(components)/AirData";
import AirDataForm from "./(components)/AirDataForm";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-blue-700">
        <div>
          <AirData />
        </div>
      </section>
      <section className="flex flex-col h-screen bg-gradient-to-r from-white to-gray-50">
        <div className="flex justify-center mt-7">
          <h1>Advice</h1>
        </div>
      </section>
    </div>
  );
}
