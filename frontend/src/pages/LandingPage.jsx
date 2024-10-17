import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false); // State to control modal visibility
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const toggleLoginModal = () => {
    setShowLogin(!showLogin); // Toggle the visibility of the Login modal
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="w-full py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src="/RSMS-logo.png" alt="RSMS" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-gray-900">RSMS</h1>
          </div>
          <nav className="space-x-4">
            <Link
              to="/admin"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-all"
            >
              Admin?
            </Link>
            <button
              onClick={toggleLoginModal}
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-500 transition-all"
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Manage Your Society with Ease
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            RSMS helps you track issues, manage events, and keep your society
            running smoothly. Join us and make your residential life more simple
            and efficient.
          </p>
          <button
            onClick={toggleLoginModal}
            className="px-8 py-4 text-white bg-blue-600 font-semibold rounded-md shadow hover:bg-blue-500 transition-all"
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://hd.wallpaperswide.com/thumbs/residential_district-t2.jpg"
              alt="Society"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &#10005;
            </button>
            {isLogin ? <Login /> : <Signup />}
            <p className="text-center text-gray-600 mt-4">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-500 transition-all"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">
            About Our Society
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
              <p className="text-gray-600">
                We believe in building a community where every resident's voice
                is heard. RSMS makes it easy to report issues and track their
                progress.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Easy Management</h4>
              <p className="text-gray-600">
                Manage events, reports, and community discussions all in one
                place. No more paperwork, just clean digital management.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Real-Time Updates</h4>
              <p className="text-gray-600">
                Get real-time updates on the progress of your reports and
                events. Stay informed and engaged in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Issue Tracking</h4>
            <p className="text-gray-600">
              Track and manage issues with ease. Get them resolved faster.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Event Management</h4>
            <p className="text-gray-600">
              Organize society events, from planning to execution, with our
              all-in-one tool.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Community Engagement</h4>
            <p className="text-gray-600">
              Keep your community informed and involved with real-time updates.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / Logo */}
          <div>
            <h4 className="text-2xl font-serif font-bold mb-4">RSMS</h4>
            <p className="text-gray-400">
              Redefining Society Management System
            </p>
          </div>

          {/* Empty space in middle for balanced layout */}
          <div></div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Have any questions? Reach out to us, and we'll get back to you
              shortly.
            </p>
            <ul className="mt-4 space-y-1 text-gray-400">
              <li>
                Email:{" "}
                <a href="mailto:support@rsms.com" className="hover:text-white">
                  support@rsms.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-white">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2024 RSMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
