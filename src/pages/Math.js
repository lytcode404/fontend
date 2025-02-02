import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const EditableMathField = dynamic(() => import("react-mathquill"), { ssr: false });

function Test() {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');

    return (
        <>
            

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Math Editor</h1>

                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                <EditableMathField
                        latex={latex}
                        onChange={(mathField) => {
                            setLatex(mathField.latex());
                        }}
                        style={{ width: '100%', minHeight: '200px', padding: '10px' }}
                    />
                </div>

                <div className="mt-4">
                    <p className="font-medium">Rendered Math:</p>
                    <div
                        className="bg-white p-2 rounded-md shadow-sm mt-2"
                        dangerouslySetInnerHTML={{ __html: `<span>${latex}</span>` }}
                    />
                </div>
            </div>
        </>
    );
}

export default Test;
