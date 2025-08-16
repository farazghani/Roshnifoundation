import Image from "next/image";

const blogPosts = [
  {
    date: "January 15, 2025",
    title: "Childcare Crisis",
    desc: "Many children lack access to basic care and education. Discover how your involvement can improve young lives.",
    image: "/image1.png",
  },
  {
    date: "July 22, 2024",
    title: "Popular Charities",
    desc: "Learn about trusted organizations making real impact, and how your donations fuel their efforts every day.",
    image: "/N1.png",
  },
  {
    date: "June 20, 2025",
    title: "Where to Give Now",
    desc: "See which causes need urgent support. Stay informed and make the greatest difference with your giving.",
    image: "/N2.png",
  },
];

const BlogNewsSection = () => {
  return (
    <section className="flex flex-col max-w-[1440px] px-4 sm:px-[72px] pt-[34px] pb-[13px] items-center gap-[60px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-[32px] font-bold">Latest News and Blog</h2>
        <button className="border border-black px-4 sm:px-6 py-2 rounded-md text-sm hover:bg-black hover:text-white transition w-fit">
          MORE NEWS
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-8 w-full items-center sm:items-stretch">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white w-full sm:w-[384px] rounded-xl shadow-md flex flex-col overflow-hidden transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={384}
              height={358}
              className="h-[200px] sm:h-[358px] w-full object-cover"
            />

            <div className="p-4 sm:p-6 flex flex-col gap-2">
              <p className="text-sm text-gray-500">📅 {post.date}</p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.desc}</p>
              <button className="mt-2 text-sm font-semibold text-black flex items-center gap-1 hover:underline">
                READ MORE <span className="text-orange-500">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogNewsSection;

