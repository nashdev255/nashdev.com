'use client'

import React from 'react'
import { motion } from 'framer-motion'

type TypingText = {
    text: string;
    textStyles: string;
};

const TypingText = ({ text, textStyles }: TypingText) => {

    const TypingTextVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

    return (
        <>
            <motion.p
            variants={ TypingTextVariants } initial="hidden" animate="visible"
            className={`${ textStyles }`}
            >
                { text }
            </motion.p>
        </>
    )
}

export default TypingText;
