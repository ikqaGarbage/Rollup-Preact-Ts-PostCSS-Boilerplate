import {render, Component } from 'preact';
import styles from "./styles.css";
class App extends Component {
    render() {
        return <h1 className={styles.testClass}>Hello :)</h1>;
    }
}

render(<App />, document.body);