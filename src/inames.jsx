function Car(props) {
  return <li>I am a {props.name}</li>;
}

function Garage() {
  const cars = [
    { id: 1, name: "ford" },
    { id: 2, name: "bmw" },
    { id: 3, name: "Audi" },
    { id: 4, name: "nissan" },
  ];

  //const sortedCars = cars.sort((a, b) => a.localeCompare(b));
  return (
    <>
      <h1>Who lives in the garage</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} name={car.name} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
