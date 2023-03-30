import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
 import App from './App';
// import User from './functionalComponent';
// import Student from './classComponent';
// import UpdateState from './state';
// import MyProps from './props';
// import NewProps from './prop(1)';
// import NewState from './state(1)';
// import Constructor from './constructor';
// import Myuser from './renderMethod';
import ShouldUpdate from './shouldComponentUpdate';
import ComponentUpdate from './componentDidUpdate';
import ComponentUnmount from './componentWillUnmount';
// import ComponentMount from './componentDidMount';
import EffectUser from './EffectUser';
import UseEffect from './useEffect';
import NewUseEffect from './useEffect(1)';
import PropsEffect from './EffectUser(1)';
import Style from './style';
import StudentList from './List';
import StudentTable from './BootstrapTable';
import NestedList from './nestedList';
import ReuseComponent from './ReuseComponent';
import Fragment from './Fragment';
import ChildToParents from './ChildToParent';
import MyComponent from './pureComponent';
import UseMemo from './useMemo';
import RefPractice from './Ref';
import UseRefHooks from './useRefHooks';
import ForwardRef from './ForwardRef';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './uncontrolledComponent';
import HighestOrderComponent from './highestOrderComponent';
import ReactRouter from './ReactRouter';
import RouterApp from './RouterLinks';
import NavBarStyle from './NavbarStyle';
import Filter from './filter';
import MyNavOnClick from './NavOnClick(1)';
import NestedRouter from './NestedRouter';
import Login from './Login';
import LoginRouter from './LoginRouter';
import GetApp from './GetMethod';
import UserData from './userData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
    /* 
    <User/>
    <Student/>
    <UpdateState/>
    <MyProps name="sumit" email="sumit@gmail.com"/>
    <NewProps name="sumit" email="sumit@gmail.com" address="delhi"/>
    <NewState/>
    <Constructor/>
    <Myuser/> */}
    {/* <ComponentMount/> */}
    {/* <ComponentUpdate/> */}
    {/* <ShouldUpdate/> */}
    {/* <ComponentUnmount/> */}
    {/* <UseEffect/> */}
    {/* <NewUseEffect/> */}
    {/* <PropsEffect/> */}
    {/* <Style/> */}
    {/* <App /> */}
    {/* <StudentList/> */}
    {/* <StudentTable/> */}
    {/* <NestedList/> */}
    {/* <ReuseComponent/> */}
    {/* <Fragment/> */}
    <ChildToParents/>
    {/* <MyComponent/> */}
    {/* <UseMemo/> */}
    {/* <RefPractice/> */}
    {/* <UseRefHooks/> */}
    {/* <ForwardRef/> */}
    {/* <ControlledComponent/> */}
    {/* <UncontrolledComponent/> */}
    {/* <HighestOrderComponent/> */}
    {/* <ReactRouter/> */}
    {/* <RouterApp/> */}
    {/* <NavBarStyle/> */}
    {/* <MyNavOnClick/> */}
    {/* <NestedRouter/> */}
    {/* <LoginRouter/>
    <GetApp/>
    <UserData/> */}
  
  </React.StrictMode>
);
