SELECT 
course.title, course.id, AVG(score) as avgscore,

FROM course 
INNER JOIN enrolments
ON course.id=course_id
INNER JOIN students
ON students.id=students_id
WHERE 