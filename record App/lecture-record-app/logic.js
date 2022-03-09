const { Lecture } = require('./Models');
const { db } = require('./db/db.config');
require('dotenv').config();

const MEDIA_URL = process.env.MEDIA_URL; 

async function fetchCourses() {
    const courses = [];
    const snapshot = await db.collection('Courses').get();

    if (snapshot.docs.length <= 0) return [];
    
    snapshot.docs.map(doc => courses.push(doc.data()));

    return courses;
}

async function fetchLectures(id) {
    const lectures = [];
    const snapshot = await db.collection('Lectures').where('courseId', '==', id).get();

    if (snapshot.docs.length <= 0) return [];

    snapshot.docs.map(doc => lectures.push(doc.data()));

    return lectures;
    
}

async function fetchCourse(id) {
    const course = (await db.collection('Courses').doc(id).get()).data();

    return course;
}

async function saveLecture(req, res) {
    const { startTime, endTime, attendance, week } = req.body;
    const courseId = req.params.id;
    const mediaURL = `${MEDIA_URL}${courseId}.webm`;

    const lecture = new Lecture(courseId, startTime, endTime, attendance, mediaURL, week);

    await db.collection('Lectures').add({ ...lecture.get() });
    
    res.send('Upload successfull!').end()
}


module.exports = {
    fetchCourses,
    fetchCourse,
    fetchLectures,
    saveLecture
}