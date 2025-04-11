import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", { email, password });
    setError("");
    // Navigate to dashboard after login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1526] relative overflow-hidden">
      <Navbar />
      
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.max(1, Math.random() * 2)}px`,
              height: `${Math.max(1, Math.random() * 2)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Subtle cosmic glow */}
        <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-blue-900 opacity-15 blur-2xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-48 h-48 rounded-full bg-[#3b82f6]/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center flex-grow z-10 mt-20 md:mt-12">
        {/* Login form container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1c30] border border-white/10 shadow-lg rounded-xl w-full max-w-sm relative overflow-hidden mb-6"
        >
          {/* Header section */}
          <div className="bg-gradient-to-r from-[#0a1526] to-[#0d1c30] p-5 border-b border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#3b82f6] mr-2">★</span>
              Welcome Back
            </h2>
            <p className="text-white/70 text-sm mt-1">Access your cosmic journey</p>
          </div>
          
          <div className="p-5">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1 text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-[#081221] border border-white/20 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white focus:border-white/40 text-sm"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1 text-white/80">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 bg-[#081221] border border-white/20 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white focus:border-white/40 text-sm"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="••••••••"
                />
                <div className="flex justify-between items-center mt-2">
                  <label className="inline-flex items-center text-white/70 text-xs">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="w-3 h-3 accent-white mr-1.5"
                    />
                    Show password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-[#3b82f6] hover:text-white transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-xs bg-red-400/10 py-1.5 px-2 rounded-md"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-white text-[#0a1526] font-medium rounded-lg hover:bg-white/90 transition-all duration-200 text-sm"
              >
                Launch into Space
              </motion.button>
            </form>

            <div className="mt-4 text-center text-xs border-t border-white/10 pt-4">
              <span className="text-white/50">
                Don't have an account?{" "}
              </span>
              <Link
                to="/signup"
                className="text-white font-medium hover:text-[#3b82f6] transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#3b82f6]/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
        </motion.div>
        
        {/* Subtle bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center space-x-2 text-white/50 text-xs"
        >
          <span className="h-px w-5 bg-white/20"></span>
          <span>Secure login</span>
          <span className="h-px w-5 bg-white/20"></span>
        </motion.div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
}