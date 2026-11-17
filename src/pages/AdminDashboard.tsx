
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-neutral-400">
              Welcome to your portfolio management area.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-500"
          >
            Logout
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold">
              Manage Projects
            </h2>
            <p className="mt-2 text-neutral-400">
              Update your portfolio projects.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold">
              Manage Certifications
            </h2>
            <p className="mt-2 text-neutral-400">
              Manage your certificates and achievements.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold">
              Manage Contact Details
            </h2>
            <p className="mt-2 text-neutral-400">
              Update your portfolio contact information.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold">
              Manage Profile
            </h2>
            <p className="mt-2 text-neutral-400">
              Update your profile information.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
