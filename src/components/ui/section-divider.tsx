import { Diamond } from 'lucide-react'

export const SectionDivider = () => {
    return (
        <div className="relative py-4 flex items-center justify-center max-w-4xl mx-auto opacity-30">
            {/* Left Line - Fades from transparent to black */}
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black to-black"></div>

            {/* Center Ornament */}
            <div className="mx-4 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black mr-1 opacity-60"></div>
                <Diamond className="w-4 h-4 text-black fill-black" />
                <div className="w-2 h-2 rounded-full bg-black ml-1 opacity-60"></div>
            </div>

            {/* Right Line - Fades from black to transparent */}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black to-black"></div>
        </div>
    )
}
