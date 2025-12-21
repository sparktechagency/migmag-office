"use client";

import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import OrderDetails from "@/app/(user-dashboard)/dashboard/purchase/OrderDetails";
import { usePurchaseListQuery } from "@/app/api/authApi/authApi";

interface User {
    id: number;
    full_name: string;
    email: string;
    location?: string;
}

interface Order {
    id: number;
    order_number: string;
    status: string;
    total_amount: string;
    user: User;
}

const PurchasePage: React.FC = () => {
    const [selectedOrder, setSelectedOrder] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const { data } = usePurchaseListQuery(undefined);
    const orderData: Order[] = data?.data?.data || [];

    const handleView = (orderId: number) => {
        setSelectedOrder(orderId);
        setShowModal(true);
    };

    useEffect(() => {
        document.body.style.overflow = showModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    return (
        <div className="w-full min-h-screen p-4">
            <h1 className="text-white text-3xl mb-6 font-bold">Purchase Details</h1>

            {/* Table for large screens */}
            <div className="hidden lg:block">
                <div className="overflow-x-auto border border-gray-700 rounded-md">
                    <table className="min-w-full text-sm text-left text-white">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-4 py-3">Order #</th>
                                <th className="px-4 py-3">Full Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Location</th>
                                {/* <th className="px-4 py-3">Artist Id</th> */}
                                <th className="px-4 py-3">Total</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {orderData.map((order, index) => (
                                <tr key={order.id} className={index % 2 === 0 ? "bg-black" : ""}>
                                    <td className="px-4 py-2">{order.order_number}</td>
                                    <td className="px-4 py-2">{order.user.full_name || "N/A"}</td>
                                    <td className="px-4 py-2">{order.user.email || "N/A"}</td>
                                    <td className="px-4 py-2">{order.user.location || "N/A"}</td>
                                    {/* <td className="px-4 py-2">{order.user?.artist_id}</td> */}
                                    <td className="px-4 py-2">${parseFloat(order.total_amount).toFixed(2)}</td>
                                    <td className="px-4 py-2 capitalize">{order.status}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleView(order.id)}
                                            className="flex cursor-pointer items-center gap-1 px-3 py-1 rounded btnColor transition text-black "
                                        >
                                            <FaEye />
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20">
                    <OrderDetails
                        orderId={selectedOrder}
                        onClose={() => {
                            setShowModal(false);
                            setSelectedOrder(null);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default PurchasePage;
