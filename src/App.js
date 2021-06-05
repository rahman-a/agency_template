import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Features from './components/Features/Features'
import Services from './components/Services/Services'

function App() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
      <Landing/>
      <Features/>
      <Services/>
    </main>
    <footer>
      <h1>Footer</h1>
    </footer>
    </>
  );
}

export default App;
