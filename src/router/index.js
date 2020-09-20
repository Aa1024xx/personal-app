import { Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import {Spin} from 'antd';
import styles from './index.module.less';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const Router = () => (
    <Suspense fallback={
        <div className={styles.spinWrap}>
            <Spin size="large" />
        </div>
    }
    >
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
    </Suspense>
);

export default Router;