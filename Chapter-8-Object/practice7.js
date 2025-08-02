const college = {
    name: 'vnc',
    class: ['11','12'],
    events : ['science-fair', 'bijoy-dibos','21feb'],
    unique: {
        color: 'blue',
        result : {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.events[1]);
console.log(college.class[1]);