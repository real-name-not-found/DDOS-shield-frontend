export default function AbuseCard({ totalReports = 0, data }) {
    return (
        <div className="border-r border-b border-black p-8 flex flex-col min-h-[320px] hover:bg-neutral-50 transition-colors">
            <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">Abuse Log</span>
                <span className="material-symbols-outlined text-lg font-light text-neutral-400">report_problem</span>
            </div>
            <div className="flex flex-col justify-center flex-1">
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-serif">{totalReports}</span>
                    <span className="text-sm text-neutral-500">Reports</span>
                </div>
                <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-start border-b border-black/10 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 shrink-0">Last Reported</span>
                        <span className="font-sans text-sm text-right ml-4">{data?.lastReportedAt || '—'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400">Usage Type</span>
                        <span className="font-sans text-sm text-right max-w-[160px]">{data?.usageType || '—'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400">Domain</span>
                        <span className="font-sans text-sm">{data?.domain || '—'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400">Tor Node</span>
                        <span className={`font-sans text-sm ${data?.isTor ? 'text-risk-critical font-bold' : ''}`}>
                            {data?.isTor === true ? 'Yes' : data?.isTor === false ? 'No' : '—'}
                        </span>
                    </div>
                    {data?.hostnames && data.hostnames.length > 0 && (
                        <div className="flex justify-between items-center border-b border-black/10 pb-2">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-400">Hostnames</span>
                            <span className="font-sans text-sm text-right max-w-[140px] truncate" title={data.hostnames.join(', ')}>
                                {data.hostnames[0]}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-4">
                <button className="w-full py-2 border border-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
}
