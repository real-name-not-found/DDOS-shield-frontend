import { useState } from 'react';

export default function MlPredictionCard() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="border-r border-b border-black p-8 flex flex-col min-h-[320px] hover:bg-neutral-50 transition-colors relative">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400">AI Analysis</span>
                    <div
                        className="relative"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <span className="text-[9px] text-neutral-400 cursor-help hover:text-neutral-600 transition-colors border border-neutral-300 rounded-full size-3.5 inline-flex items-center justify-center font-sans font-medium leading-none">
                            ?
                        </span>

                        {/* Tooltip */}
                        {showTooltip && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-black text-white p-3 z-50 pointer-events-none">
                                <p className="text-[10px] leading-relaxed font-sans text-white/80">
                                    Our trained XGBoost model will analyze IP behavioral patterns and assign a confidence score for DDoS attack likelihood.
                                </p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black"></div>
                            </div>
                        )}
                    </div>
                </div>
                <span className="material-symbols-outlined text-lg font-light text-neutral-400">psychology</span>
            </div>

            {/* Coming Soon State */}
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="size-12 border border-dashed border-neutral-300 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-xl text-neutral-300">model_training</span>
                </div>

                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans mb-2">Coming Soon</span>
                <span className="text-base font-serif italic text-neutral-400 text-center max-w-[240px] leading-relaxed">
                    ML model integration is under development
                </span>

                {/* Placeholder progress bar */}
                <div className="w-full h-px bg-neutral-200 mt-8 mb-4"></div>
                <div className="w-full flex justify-between text-[10px] uppercase tracking-widest text-neutral-300 font-sans">
                    <span>Low</span>
                    <span>High Certainty</span>
                </div>
            </div>
        </div>
    );
}
