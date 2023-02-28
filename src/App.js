import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* Colors */}
      <h1 className="bg-green-600 text-white border-4 border-blue-400 mb-1">
        Hello world!
    </h1>
      <h1 className="text-mygreen">
        Hello world!
    </h1>
      <div>
        <p className="text-xs  lg:text-3xl">Hello World!</p>
      </div>

      {/* Typography */}
      <h1 className="text-3xl">Title</h1>
      <h2 className="text-2xl">Title</h2>
      <h3 className="text-xl">Title</h3>
      <p className="text-base">regular paragraph</p>
      <p className="text-sm">description paragraph</p>
      <p className="note text-xs">A little note</p>
    </div>
  )
}


export default App;
