import AirData from "./(components)/AirData";
import AirDataForm from "./(components)/AirDataForm";

export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h1>How's Yo Air?</h1>
        {/* <AirData /> */}
        <AirDataForm />
      </div>
    </div>
  );
}
