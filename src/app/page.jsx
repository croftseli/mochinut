
export const metadata = {
  title: "MochiNut",
  description: "MochiNut TN Shop",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">
        Welcome to <span className="text-gray-400">MochiNut</span>
      </h1>
      <p className="text-2xl font-medium text-gray-400">
        Mochi is a web3 social media platform that allows users to create and
        share content, connect with friends, and discover new communities.
      </p>
    </div>
  );
}
