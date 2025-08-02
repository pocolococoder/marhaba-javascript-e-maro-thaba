const article = {
    title: "Learning Js",
    category: 'Programming'
};

const propertyCheck = Object.keys(article);
const hasProperty = propertyCheck.includes('author');
console.log(hasProperty);