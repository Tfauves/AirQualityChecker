import AirDataForm from "./(components)/AirDataForm";

export default function Home() {
  return (
    <div
      className="h-screen p-5 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bgimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <AirDataForm />
      </div>
    </div>
  );
}
