import TutorialList from './components/TutorialList';

function App() {
  return (
    <div className="App">
      <TutorialList data={[
        { id: "1", title: "Title", description: "Description" }
      ]} />
    </div>
  );
}

export default App;
