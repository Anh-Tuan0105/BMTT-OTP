/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { setup2FA } from "@/app/service/authApi";
import { useEffect, useState } from "react";

interface SecretResponse {
    secret: any;
    qrCode: any;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Setup_2FA = ({ onSetupComplete }: { onSetupComplete: any }) => {
    const [response, setResponse] = useState<SecretResponse>(
        {
            secret: "",
            qrCode: "",
        }
    );
    const [message, setMessage] = useState("");

    const fetchQRCode = async () => {
        const { data } = await setup2FA();
        console.log(data);
        setResponse(data);
    }

    useEffect(() => {
        fetchQRCode();
    }, []);

    const copyClipBoard = async () => {
        await navigator.clipboard.writeText(response.secret);
        setMessage("Secret copied to clipboard");
    }

    return (
        <>
            <div className="container bg-white rounded-lg shadow-md w-full max-w-sm mx-auto my-[60px]">
                <div className="pt-6">
                    <h2 className="text-3xl text-center font-extralight">
                        Bật Xác Thực Hai Lớp
                    </h2>
                </div>
                <hr className="text-gray-200 mt-6 mb-6" />
                <p className="text-center text-gray-600 text-lg font-light pr-6 pl-6">
                    Scan the QR code below with your authenticator app
                </p>
                <div className="p-6">
                    <div className="flex justify-center">
                        {response.qrCode && <img src={response.qrCode} alt="QR Code" className="mb-4 border rounded-md" />}
                    </div>
                    <div className="flex items-center mt-3 mb-3">
                        <div className="border-t border-1 border-gray-200 flex-grow"></div>
                        <div className="text-gray-600 text-sm font-light pr-2 pl-2">
                            QR enter the code manually
                        </div>
                        <div className="border-t border-1 border-gray-200 flex-grow"></div>
                    </div>
                    <div className="mb-6">
                        {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
                        <input
                            readOnly
                            value={response.secret}
                            className="w-full border rounded mt-2 text-xs text-gray-600 p-4"
                            onClick={copyClipBoard}
                        />
                    </div>
                    <button onClick={onSetupComplete} className="w-full bg-blue-500 text-white py-2 rounded-md">Tiếp tục xác thực</button>
                </div>
            </div>
        </>
    )
}