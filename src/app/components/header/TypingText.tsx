'use client'

import React from 'react'
import clsx from 'clsx'
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
            transition: {
                duration: 2,
            },
        },
    };

    return (
        <>
            <motion.p
            variants={ TypingTextVariants } initial="hidden" animate="visible"
            className={ clsx(textStyles) }
            >
                { text }
            </motion.p>
        </>
    )
}

export default TypingText;
