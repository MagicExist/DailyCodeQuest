import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth/auth";
import LoginGoogle from "./LoginGoogle";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
        const data = await login(email, password);
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/");
        } catch (err) {
        setError(err?.response?.data?.detail || "Invalid credentials");
        } finally {
        setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#202225] p-8 rounded-2xl shadow-lg w-96 space-y-6 text-gray-100">
            <p className="text-2xl font-bold text-center text-white">Welcome</p>

            <LoginGoogle></LoginGoogle>

            {/* separator */}
            <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-600/40"></div>
                <span className="px-3 text-sm text-gray-400">or sign in with email</span>
                <div className="flex-grow h-px bg-gray-600/40"></div>
            </div>

            {/* Email login */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 bg-[#2c2f33] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="px-4 py-2 bg-[#2c2f33] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Log in
            </button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login