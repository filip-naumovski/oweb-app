import './style.css';
import React from 'react'
import { motion } from 'framer-motion'

function Favorites() {
  return (
    <motion.div initial={{ scale: 1, opacity: 1, x: -2000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: '1.2' }}>
      <div><h1>Favorites.</h1></div>
    </motion.div>
  )
}

export default Favorites;
