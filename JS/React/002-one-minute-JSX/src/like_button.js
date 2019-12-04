'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID; // Для нескольких элементов
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Нравится
      </button>
    );
  }
}

// Ищем все DOM контейнеры, и рендерим Like кнопки в них.
document.querySelectorAll('.like_button_container') // Для нескольких элементов
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute/
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });