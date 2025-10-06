/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useRouter } from "next/navigation";
// import { useSession } from "./context/SessionContext";
// import { logoutUser } from "./service/authApi";

export default function HomePage() {
  // const router = useRouter();
  // const { user, logout } = useSession();

  // const handleLogout = async () => {
  //   try {
  //     const { data } = await logoutUser();
  //     logout(data);
  //     router.push("/login");
  //   } catch (error: any) {
  //     console.log("Error: ", error.message);
  //   }
  // }
  // if (!user) {
  //   return null;
  // }
  return (
    <>
      {/* <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user.username}</h2>
        <p>You have successfully logged in and verified your 2FA</p>
        <button type="button" className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div> */}
      <div className="container bg-amber-400">
        <h1 className="text-[32px] font-[700]">
          Hello World
        </h1>
      </div>
    </>
  );
}
