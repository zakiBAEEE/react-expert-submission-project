import React from "react";

function LoginInput() {
    return (
        <div>
            <div>
                <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                    <input type="email" name="email" id="email" required onChange={onChangeEmail} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label className="block text-sm/6 font-medium text-gray-900">Password</label>

                </div>
                <div className="mt-2">
                    <input type="password" name="password" id="password" onChange={onChangePassword} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
        </div>
    )
}

export default LoginInput;