

const Login = () => {

    return (
        <form className="bg-[#202225] p-8 rounded-2xl shadow-lg w-96 space-y-6 text-gray-100">
            <p className="text-2xl font-bold text-center text-white">Welcome</p>

            <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                {/* Google Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5"
                >
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.3-.4-3.5z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.4 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 36 26.8 37 24 37c-5.3 0-9.8-3.1-11.3-7.6l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.5 5.5-6.6 6.6l6.3 5.2C38.6 36.6 44 30.9 44 24c0-1.3-.1-2.3-.4-3.5z"/>
                </svg>

                Continue with Google
            </button>

            {/* separator */}
            <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-600/40"></div>
                <span className="px-3 text-sm text-gray-400">or sign in with email</span>
                <div className="flex-grow h-px bg-gray-600/40"></div>
            </div>

            {/* Email login */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input className="px-4 py-2 bg-[#2c2f33] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <input type="password" className="px-4 py-2 bg-[#2c2f33] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Log in
            </button>
        </form>
    )
}

export default Login