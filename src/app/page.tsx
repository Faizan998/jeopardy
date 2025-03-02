'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { loginUser, signupUser, checkAuth } from '@/redux/features/authSlice';
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handlePlayClick = () => {
    if (user) {
      router.push('/play');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_50%)] animate-pulse-slow" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-1" style={{ top: '10%', left: '-10%' }} />
        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-2" style={{ top: '40%', left: '-10%' }} />
        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-3" style={{ top: '70%', left: '-10%' }} />
      </div>
      <div className="absolute inset-0 w-full h-full animate-slow-zoom transform hover:scale-105 transition-transform duration-1000">
        <Image
          src="/jeopardy.jpg"
          alt="Jeopardy Game"
          fill
          className="object-cover brightness-40 transform scale-105 hover:scale-110 transition-all duration-1000"
          priority
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_2%)] bg-[length:3rem_3rem] animate-twinkle opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_1%)] bg-[length:2rem_2rem] animate-twinkle-reverse opacity-50" />
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
        <div className="text-center max-w-2xl backdrop-blur-sm bg-black/10 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] transition-all duration-500 animate-float">
         
          <div className="relative">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x relative z-10">
              Welcome to Jeopardy Quiz Game
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl animate-pulse-slow" />
          </div>

          
          <div className="relative group">
            <p className="text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-lg animate-slide-up">
              Test your knowledge across various categories in this exciting Jeopardy-style quiz game. 
              Challenge yourself, compete with friends, and become the ultimate quiz champion!
            </p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-1000" />
          </div>
          
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-float-delayed">
            {!user ? (
              <>
                <Link 
                  href="/login" 
                  className="group relative px-8 py-4 bg-blue-600/80 text-white rounded-full hover:bg-blue-700 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden transform hover:-translate-y-1"
                >
                  <span className="relative z-10 font-semibold">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/30 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
                </Link>
                <Link 
                  href="/signup" 
                  className="group relative px-8 py-4 bg-purple-600/80 text-white rounded-full hover:bg-purple-700 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] overflow-hidden transform hover:-translate-y-1"
                >
                  <span className="relative z-10 font-semibold">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-400/30 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
                </Link>
              </>
            ) : null}
            <button 
              onClick={handlePlayClick}
              disabled={isLoading}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] font-semibold overflow-hidden animate-bounce-subtle disabled:opacity-50 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                {user ? "Continue Playing" : "Let's Play!"} 
                <span className="transform group-hover:rotate-180 transition-transform duration-500 group-hover:scale-125">🎮</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={async (email, password) => {
          await dispatch(loginUser({ email, password })).unwrap();
          router.push('/play');
        }}
        onSignup={async (email, password, username) => {
          await dispatch(signupUser({ email, password, username })).unwrap();
          router.push('/play');
        }}
      />
    </div>
  );
}
