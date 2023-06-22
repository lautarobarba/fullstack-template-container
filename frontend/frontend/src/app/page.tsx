import Link from "next/link";

const Home = () => {
  return (
    <main>
      <br />
      <h1 className="text-center">NextJS Template</h1>
      <div className="flex flex-col flex-nowrap justify-center">
        <hr className="m-auto w-80" />
      </div>
      <Link href="/admin" className="ml-5 text-blue-500">
        {">>"} AdminDashboard ⚙️
      </Link>
    </main>
  );
};

export default Home;
