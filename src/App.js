import { useForm } from 'react-hook-form';
import logo from './logo.svg';
import './App.css';
import { userState } from 'react';


function App() {
  const { register, handleSubmit,  errors} = useForm();
  const {userInfo,setUserInfo} = userState();
  const onSubmit = (data) => {
    setUserInfo(data);
      console.log(data);
  }
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
     <form onSubmit={handlesubmit(onSubmit)}>
      <h1 className='text-center'>Registration Form</h1>
      <div className='ui divider'>
        <div className='ui form'>
        <div class="form-group">
    <label>Username</label>
    <input type="text" class="form-control"  name='username' placeholder='username'/>
  </div>
          <div class="form-group">
    <label>Email</label>
    <input type="email" class="form-control" name='email' placeholder='Email' />
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" name='password' placeholder='Password' />
  </div>
  <div className='text-center'>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
        </div>
      </div>
     </form>
    </div>
  );
}

export default App;
