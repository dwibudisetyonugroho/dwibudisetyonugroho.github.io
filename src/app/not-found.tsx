'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileQuestion, ArrowLeft, Home } from 'lucide-react'
import { DataAnalyticsBackground } from '@/components/portfolio/DataAnalyticsBackground'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="relative min-h-screen text-black bg-[#E5E7EB] flex flex-col justify-between overflow-x-hidden">
      <DataAnalyticsBackground />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6"
        >
          {/* Badge & Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-[#023047]/5 border border-[#023047]/10 text-[#023047]">
            <FileQuestion className="h-12 w-12 text-[#219ebc]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#fb8500] uppercase">
              404 ERROR
            </span>
            <h1 className="text-3xl font-extrabold text-[#023047] tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 font-medium leading-relaxed pt-1">
              The page or resource you are looking for doesn't exist or may have been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              className="w-full sm:w-auto px-6 py-2.5 h-11 bg-[#023047] text-white hover:bg-[#023047]/90 font-bold rounded-xl shadow-md transition-all"
            >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto px-6 py-2.5 h-11 border-slate-300 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-all"
            >
              <Link href="/profile">
                <ArrowLeft className="h-4 w-4 mr-2" />
                View Profile
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
