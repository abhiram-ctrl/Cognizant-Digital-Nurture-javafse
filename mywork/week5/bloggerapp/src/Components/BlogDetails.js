function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Basics",
            author: "Abhiram"
        },
        {
            id: 2,
            title: "Understanding Spring Boot",
            author: "John"
        },
        {
            id: 3,
            title: "Java 21 Features",
            author: "David"
        }
    ];

    return (
        <div>

            <h2>Blog Details</h2>

            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <b>{blog.title}</b> - {blog.author}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default BlogDetails;