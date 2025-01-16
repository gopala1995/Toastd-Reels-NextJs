import VideoReel from "../components/VideoReel";

export default function VideosPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <h1 className="text-center text-2xl font-bold p-4">Toastd Reels</h1>
      </header>
      <main className="overflow-y-scroll snap-y snap-mandatory ">
        <VideoReel />
      </main>
    </div>
  );
}
