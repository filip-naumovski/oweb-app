import './style.css';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(() => {
            return true;
        })
        console.log(isLoaded);
    }, [])

    return (
        <motion.div initial={{ scale: 1, opacity: 0, x: -2000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: '1.2' }}>
            <h1 style={{ textAlign: "center", fontFamily: "Verdana", marginTop: "5vh" }}>Contact information:</h1>
        </motion.div>
    );
}

export default Contact;
