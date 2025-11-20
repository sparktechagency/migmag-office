

import React from "react";
import LoginPage from "@/app/(authentication)/login/LoginPage";
export const metadata = {
    title: "Authentication | Tunem",
    description:
        "Access your Tunem account to manage your music, artists, and preferences. Login or create a new account to continue.",
};

const page: React.FC = () => {
    return (

        <div>
            <LoginPage></LoginPage>
        </div>

    )
}

export default page
