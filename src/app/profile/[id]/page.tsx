export default function UserProfile({params}: any) {
  return (
    <div>
      <h1>Profile</h1>
      <p className="text-4xl">Profile Page {params.id}</p>
    </div>
  );
}
