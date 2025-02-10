import React, { useState } from "react";
import { Mail, Lock, User, BadgeCheck, Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    role: "USER",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    const url = isLogin ? "http://localhost:5000/auth/login" : "http://localhost:5000/auth/signup";
    const payload = isLogin ? { email: formData.email, password: formData.password } : formData;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log("Success:", data);
      alert(data.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-[#fdf5e6]">
      <Navbar />
      <div className="flex items-center justify-center px-6 py-16 pt-28">
        <div className="flex w-full max-w-4xl overflow-hidden bg-white shadow-lg rounded-xl min-h-[500px]">
          {/* Left Side - Image */}
          <div className="hidden w-1/2 md:block">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1617957743565-3481a8f14530?q=80&w=1080"
              alt="Authentication"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full p-8 md:w-1/2 flex flex-col justify-center min-h-[500px]">
            <h2 className="mb-6 text-3xl font-bold text-center text-[#8b5e3b]">
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </h2>

            {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute text-[#8b5e3b] left-4 top-3" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 pl-12 border border-[#e3caa5] rounded-lg focus:ring-2 focus:ring-[#d9a86c]"
                  required
                />
              </div>

              {/* Name Field (Only for Signup) */}
              {!isLogin && (
                <div className="relative">
                  <User className="absolute text-[#8b5e3b] left-4 top-3" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-3 pl-12 border border-[#e3caa5] rounded-lg focus:ring-2 focus:ring-[#d9a86c]"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Password Field */}
              <div className="relative">
                <Lock className="absolute text-[#8b5e3b] left-4 top-3" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 pl-12 border border-[#e3caa5] rounded-lg focus:ring-2 focus:ring-[#d9a86c]"
                  required
                />
                {showPassword ? (
                  <EyeOff
                    className="absolute text-[#8b5e3b] cursor-pointer right-4 top-3"
                    size={20}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="absolute text-[#8b5e3b] cursor-pointer right-4 top-3"
                    size={20}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {/* Role Selection (Only for Signup) */}
              {!isLogin && (
                <div className="relative">
                  <BadgeCheck className="absolute text-[#8b5e3b] left-4 top-3" size={20} />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-3 pl-12 border border-[#e3caa5] rounded-lg focus:ring-2 focus:ring-[#d9a86c]"
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 text-white transition duration-300 bg-[#d9a86c] rounded-lg hover:bg-[#b8875e]"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle Between Login & Signup */}
            <p className="mt-4 text-center text-[#8b5e3b]">
              {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-[#b8875e] hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;