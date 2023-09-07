'use client'

import React from 'react'
import { motion } from 'framer-motion'

type TypingText = {
    text: string;
    className: string;
};

const TypingText = ({ text, className }: TypingText) => {

    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };

    return (
        <>
            <motion.p
            variants={ variants } initial="hidden" animate="visible"
            className={`${ className }`}
            >
                { text }
            </motion.p>
        </>
    )
}

export default TypingText;
