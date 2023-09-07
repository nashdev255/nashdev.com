'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TypingText = ({ text }: { text: string }) => {

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
            <motion.div variants={ variants } initial="hidden" animate="visible">
                { text }
            </motion.div>
        </>
    )
}

export default TypingText;
