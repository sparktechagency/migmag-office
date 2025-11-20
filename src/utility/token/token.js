"use client"


const config = localStorage.getItem('token');

export const token = {
    headers: {
        Authorization: `Bearer ${config}`,
    },
};