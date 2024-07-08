//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

  // created a new div with className blog-buttons and append it to newBox
  const btnDiv=document.createElement('div');
  btnDiv.classList.add('blog-buttons');
  
    // moveup button with class blog-button and move-up
  //Added event listerner to moveup button
 const btnM = document.createElement('button');
  btnM.classList.add('blog-button', 'move-up');
  btnM.textContent = 'Move Up';
  btnDiv.appendChild(btnM);
  btnM.addEventListener('click',()=>{
      const parent = newBox.parentNode;
      const prev = newBox.previousElementSibling;
      if (prev !== null) {
          parent.insertBefore(newBox, prev);
      }
  });
   //Created movedown button with class blog-button and move-down
  //Added event listerner to movedown button
  const btnD = document.createElement('button');
  btnD.classList.add('blog-button', 'move-down');
  btnD.textContent = 'Move Down';
  btnDiv.appendChild(btnD);
   btnD.addEventListener('click', () => {
      const parent = newBox.parentNode;
      const next = newBox.nextElementSibling;
      if (next !== null) {
          parent.insertBefore(next, newBox);
      }
  });
  
  
  //Created delete button with class blog-button and delete
  //Added event listerner to delete button
  const btnDel = document.createElement('button');
  btnDel.classList.add('blog-button', 'delete');
  btnDel.textContent = 'Delete';
  btnDiv.appendChild(btnDel);
  btnDel.addEventListener('click', () => {
      newBox.remove();
  });
  
  newBox.appendChild(btnDiv);
  

    blogList.appendChild(newBox);

}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
},
{
title: 'Second Blog Post',
date: 'February 1, 2022',
content: 'This is the content of the second blog post.'
},
{
title: 'Third Blog Post',
date: 'March 1, 2022',
content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array