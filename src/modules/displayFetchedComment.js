import fetchComment from './fetchComment.js';
import countComments from './countComments.js';

const displayFetchedComment = async (itemId) => {
  const comments = await fetchComment(itemId);
  const numberOfComments = document.querySelector('.count-comments');
  numberOfComments.value = `${countComments(comments)}`;
  const commentDiv = document.querySelector('.show-comments');

  if (comments.length > 0) {
    comments.forEach((comment) => {
      commentDiv.innerHTML += `
        <div class="view-comments">
          <p class="date-comment">${comment.creation_date}</p>
          <p class="username-comment">${comment.username}:</p>
          <p>${comment.comment}</p>
        </div>
      `;
    });
  } else {
    const noCommentDiv = document.createElement('p');
    noCommentDiv.className = 'no-comment';
    noCommentDiv.innerHTML = 'No comments Yet. Kindly add some!!';
    commentDiv.appendChild(noCommentDiv);
  }
};

export default displayFetchedComment;