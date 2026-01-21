"use client"
import { authClient } from '@/lib/auth-client'

const ProfilePage = () => {
const { data: session } = authClient.useSession()
console.log(session?.user)
  return (
    <div>

         <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        
        {/* Profile Image */}
        <div className="flex justify-center">
        </div>

        {/* Name & Role */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">
           {session?.user.name}
          </h2>
          <p className="text-sm text-gray-500">
           {session?.user.email}
          </p>
        </div>

        {/* Bio */}
        <p className="text-center text-gray-600 mt-4">
          Passionate web developer specializing in Next.js, Tailwind CSS,
          and modern backend technologies.
        </p>

        {/* Stats */}
        <div className="flex justify-between mt-6 text-center">
          <div>
            <p className="text-xl font-bold text-gray-800">120</p>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">5+</p>
            <p className="text-sm text-gray-500">Years</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">2k</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
        </div>

         <div>
            <p className="text-xl font-bold text-gray-800">verify</p>
            <p className="text-sm text-gray-500">{session?.user.emailVerified}</p>
          </div>
            <div>
            <p className="text-xl font-bold text-gray-800">id</p>
            <p className="text-sm text-gray-500">{session?.user.id}</p>
          </div>
        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Follow
          </button>
          <button className="w-full py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Message
          </button>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default ProfilePage
