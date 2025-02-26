import { auth, db } from "@/db/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function YouTubeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = auth?.currentUser?.uid;
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          console.log(userDocSnap.data());
          setUserData(userDocSnap.data());
        } else {
          setError("User not found");
        }
      } catch (err) {
        setError("Error fetching user details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const router = useRouter();
  const { skill } = router.query;

  useEffect(() => {
    setQuery(skill);
  }, []);

  const API_KEY = "AIzaSyC46GhGiHSuo7PnjsqTVVLPI7LARczBI-E"; // Replace with your API key

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=playlist&maxResults=10&key=${API_KEY}`
      );
      const data = await response.json();
      setResults(data.items || []);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-black p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">YouTube Course Finder</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full p-3 rounded-lg bg-bodydark1 border border-gray-600 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-5 py-3 bg-primary hover:bg-secondary rounded-lg font-semibold"
          >
            Search
          </button>
        </div>
      </div>

      <ul className="text-black flex flex-wrap gap-4 mt-4">
        {userData?.missing_skills?.length > 0 &&
          userData?.missing_skills?.map((val, index) => (
            <li className="bg-primary rounded-full p-2 text-white" key={index}>
              {val}
            </li>
          ))}
      </ul>

      {/* Results Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading && <p className="text-center">Loading...</p>}
        {results.map((item) => (
          <div
            key={item.id.playlistId}
            className="bg-bodydark1 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2">{item.snippet.title}</h2>
            <p className="text-sm text-gray-400">
              {item.snippet.description.slice(0, 80)}...
            </p>
            <a
              href={`https://www.youtube.com/playlist?list=${item.id.playlistId}`}
              target="_blank"
              className="block mt-2 text-blue-400 hover:text-blue-500"
            >
              View Playlist
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
