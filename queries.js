var task = {
    stuinfo: 'SELECT student.stu_name AS "学生姓名", course.course_name AS "课程名称", course_selected.course_grade AS "课程成绩", course.course_credit AS "课程学分" FROM student, course, course_selected WHERE student.stu_id = course_selected.stu_id AND course.course_id = course_selected.course_id AND student.stu_name = ?',
    avggrade: 'SELECT course.course_name AS "课程名称", AVG(course_selected.course_grade) AS "平均成绩" FROM course, course_selected WHERE course.course_id = course_selected.course_id AND course.course_name = ?',
    sortcourse: 'SELECT course.course_name AS "课程名称", AVG(course_selected.course_grade) AS "平均成绩" FROM course, course_selected WHERE course.course_id = course_selected.course_id GROUP BY course.course_name ORDER BY "平均成绩" DESC ',
    showcourse: 'SELECT course.course_name AS "课程名称", professor.prof_name AS "教师姓名" FROM course, professor, prof_course WHERE course.course_id = prof_course.course_id AND professor.prof_id = prof_course.prof_id',
    creditsum: 'SELECT student.stu_name AS "学生姓名", SUM(course.course_credit) AS "学分总计" FROM student, course, course_selected WHERE student.stu_id = course_selected.stu_id AND course_selected.course_id = course.course_id AND student.stu_name = ?'
}

module.exports = task;