import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import fantasy from './data/fantasy.json'
// import history from './data/history.json'
// import horror from './data/horror.json'
// import romance from './data/romance.json'
// import scifi from './data/scifi.json'
import BookList from './components/BookList'

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks genre={fantasy} />
      <AllTheBooks genre={history} />
      <AllTheBooks genre={horror} />
      <AllTheBooks genre={romance} />
      <AllTheBooks genre={scifi} /> */}
      <BookList manyBooks={fantasy} />
      <MyFooter />
    </div>
  )
}

export default App
