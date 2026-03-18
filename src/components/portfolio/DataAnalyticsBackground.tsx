export const DataAnalyticsBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
            {/* Very subtle radial glow for depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] opacity-30" />
        </div>
    )
}
