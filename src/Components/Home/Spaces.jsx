import React from 'react';
import comparisonData from '../../Data/Area';

const Spaces = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
            {/* Header Section */}
            <div className="max-w-2xl mb-12">
                <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4 ">Specs</h3>
                <h1 className="text-3xl md:text-5xl font-serif text-black mb-6">Why Choose Area?</h1>
                <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed">
                    You need a solution that keeps up. That’s why we developed Area. <br className="hidden md:block" />
                    A developer-friendly approach to streamline your business.
                </p>
                <button className="bg-[#D9F2D0] hover:bg-[#c8e6bc] transition-colors px-6 py-2 rounded-full text-sm font-medium">
                    Discover More
                </button>
            </div>

            {/* Comparison Table */}
            <div className="w-full max-w-5xl overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-sm font-medium text-gray-600 ">
                            <th className="py-6 px-4 bg-[#F9F9F9] rounded-t-2xl w-1/3 text-lg font-semibold text-black">Area</th>
                            <th className="py-6 px-4 w-1/3">WebSurge</th>
                            <th className="py-6 px-4 w-1/3">HyperView</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-600">
                        {comparisonData.map((row, index) => (
                            <tr key={index} className="border-t border-gray-100">

                                {/* Area Column (Using .text property) */}
                                <td className="py-4 px-6 bg-[#F9F9F9] text-left ">
                                    <span className="flex items-center gap-2">
                                        <CheckIcon className="text-gray-400- w-4 h-4 shrink-0" />
                                        {row.area.text}
                                    </span>
                                </td>

                                {/* WebSurge Column (Using .available and .text) */}
                                <td className="py-4 px-6 text-left  ">
                                    <span className="flex items-center gap-2">
                                        {row.webSurge.available ? (
                                            <CheckIcon className="text-gray-400 w-4 h-4 shrink-0" />
                                        ) : (
                                            <XIcon className="text-gray-300 w-4 h-4 shrink-0" />
                                        )}
                                        {row.webSurge.text}
                                    </span>
                                </td>

                                {/* HyperView Column (Using .available and .text) */}
                                <td className="py-4 px-6 text-left border-l border-gray-50">
                                    <span className="flex items-center gap-2">
                                        {row.hyperView.available ? (
                                            <CheckIcon className="text-gray-400 w-4 h-4 shrink-0" />
                                        ) : (
                                            <XIcon className="text-gray-300 w-4 h-4 shrink-0" />
                                        )}
                                        {row.hyperView.text}
                                    </span>
                                </td>

                            </tr>
                        ))}
                        {/* Visual Footer for the Highlighted Column */}
                        <tr>
                            <td className="bg-[#F9F9F9] h-4 rounded-b-2xl "></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

// Helper Components for Icons
const CheckIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default Spaces;