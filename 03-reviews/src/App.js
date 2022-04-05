import Review from "./Review";
import data from "./data";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>Our Reviews</h3>
          <div className="underline"></div>
        </div>
        <Review reviews={data} />
      </section>
    </main>
  );
}

export default App;
