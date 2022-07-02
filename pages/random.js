import Link from 'next/link'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div 
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }} 
      className="flex flex-col justify-center items-center">
      <h1>Hey, page random</h1>
      <Link href='/'>
        <a>Page Accueil</a>
      </Link>
    </motion.div>
  )
}