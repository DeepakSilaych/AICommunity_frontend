
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Home from './pages/Home/Home.jsx';
import Blog from './pages/blogsHome/blog.jsx';
import Layout from './pages/Layout/Layout.jsx';
import Project from './pages/Project/project.jsx';
import BlogDetails from './pages/blogsHome/BlogDetails.jsx';
import Team from './pages/Team/Team.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import FacultyAdvisor from './pages/FacAd/FacAd.jsx';
import Member from './pages/Member/Member.jsx';
import ProjectReport from './pages/Project/ProjectReport.jsx';

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 0 },
};

function App() {
  return (
    <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/blogs"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Blog />
                </motion.div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <BlogDetails />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Project />
                </motion.div>
              }
            />
            <Route
              path="/project/:id"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <ProjectReport />
                </motion.div>
              }
            />
            <Route
              path="/ourteam"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Team />
                </motion.div>
              }
            />
            <Route
              path="/member/:id"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Member />
                </motion.div>
              }
            />
            <Route
              path="/facad"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <FacultyAdvisor />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                  <NotFound />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
    </Layout>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
