import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './component/Content';

export default function App() {
  return (
    <section className="container" id="container">
      <Content />
    </section>
  );
}
