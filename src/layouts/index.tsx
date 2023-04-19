import { Link, Outlet } from 'umi';
import React from 'react';
import styles from './index.less';
import ReactDOM from 'react-dom';
import App from '../app';

// ReactDOM.render(<App />, document.getElementById('root'));

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
