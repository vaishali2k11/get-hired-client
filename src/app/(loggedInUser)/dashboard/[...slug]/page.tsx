// src/app/(loggedInUser)/dashboard/[...slug]/page.tsx
import { LoggedInUserNav } from "@/components/Navbar/LoggedInUserNav";
import { UserDashboardComp } from "@/components/LoggedInUser/UserDashboardComp/UserDashboardComp";

interface PageProps {
    params: { slug: string[] };
}

export default function UserDashboard({ }: PageProps) {

    return (
        <>
            <LoggedInUserNav />
            <main className="bg-[#f3f2f0]">
                <UserDashboardComp />
            </main>
        </>
    );
}
