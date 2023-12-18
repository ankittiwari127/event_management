import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

const AdminWelcomePage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/admin/logout");
      console.log(response.data);
      router.push("/");
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <>
      <div className="flex bg-green-300">
        <h2
          className="flex-1 text-left p-4 bg-green-200 text-xl cursor-pointer rounded-full"
          onClick={handleLogout}
        >
          Home
        </h2>
        <h2
          className="flex-1 text-right p-4 bg-green-200 text-xl cursor-pointer rounded-full"
          onClick={handleLogout}
        >
          Logout
        </h2>
      </div>
      <div className="flex items-center justify-center h-screen bg-blue-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8 bg-gray-200 p-8 rounded-full">
            Welcome Admin
          </h1>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-200 p-4 rounded-full">
              <h2 className="text-lg font-semibold mb-2 rounded-full">Mentain User</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-full">
              <h2 className="text-lg font-semibold mb-2 rounded-full">Mentain Vendor</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWelcomePage;
