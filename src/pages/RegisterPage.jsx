import { useNavigate } from 'react-router';
import { asyncRegisterUser } from '../states/users/action';
import { useInput } from '../customHooks/useInput';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, onChangeName] = useInput();
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    if (authUser !== null) {
      navigate('/');
    }
  });


  if (authUser === null) {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            asyncRegisterUser({ name, email, password });
            navigate('/');
          }
          }

          method="POST">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">Name</label>
              <div className="mt-2">
                <input type="text" name="name" id="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={onChangeName} value={name} />
              </div>
            </div>

            <div>
              <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={onChangeEmail} value={email} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900">Password</label>

              </div>
              <div className="mt-2">
                <input type="password" name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={onChangePassword} value={password} />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Sudah punya akun?
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={() => navigate('/')}>Masuk Di Sini</a>
          </p>
        </div>
      </div>

    );
  }

}

export { RegisterPage };