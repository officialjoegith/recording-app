const { v4: uuid } = require('uuid')

class Course {
    constructor(lecturerName, courseTitle, courseCode, courseTime, courseDay, courseWeek) {
        this.key = uuid();
        this.lecturerName = lecturerName;
        this.courseTitle = courseTitle;
        this.courseCode = courseCode;
        this.courseTime = courseTime;
        this.courseDay = courseDay;
        this.courseWeek = courseWeek;
    }

    get() {
        return {
            key: this.key,
            lecturerName: this.lecturerName,
            courseTitle: this.courseTitle,
            courseCode: this.courseCode,
            courseTime: this.courseTime,
            courseDay: this.courseDay,
            courseWeek: this.courseWeek
        }
    }
}

class Lecture {
    constructor(courseId, startTime, endTime, attendance, mediaURL, week) {
        this.key = uuid();
        this.courseId = courseId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.attendace = attendance;
        this.mediaURL = mediaURL;
        this.week = week;
    }

    getDuration() {
        return new Date(this.endTime - this.startTime).toLocaleTimeString().split(':').slice(0, 2).join(':');
    }

    get() {
        return {
            key: this.key,
            courseId: this.courseId,
            startTime: this.startTime,
            endTime: this.endTime,
            duration: this.getDuration(),
            attendance: this.attendace,
            mediaURL: this.mediaURL,
            week: this.week
        }
    }
}

module.exports = {
    Course,
    Lecture
}