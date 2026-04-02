import settings from "../settings.json";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>{settings.name}</h1>
      <p>App ID: {settings.id}</p>
      <p>Version: {settings.version}</p>
    </div>
  );
}

export default App;






