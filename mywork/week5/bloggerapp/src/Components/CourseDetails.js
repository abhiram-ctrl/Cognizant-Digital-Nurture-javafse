function CourseDetails() {

    const courses = [
        {
            id: 1,
            name: "React",
            duration: "6 Weeks"
        },
        {
            id: 2,
            name: "Spring Boot",
            duration: "8 Weeks"
        },
        {
            id: 3,
            name: "Java Full Stack",
            duration: "12 Weeks"
        }
    ];

    return (
        <div>

            <h2>Course Details</h2>

            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name} - {course.duration}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default CourseDetails;