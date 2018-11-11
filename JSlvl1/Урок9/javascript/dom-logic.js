const oppenedFilms = {};

document.addEventListener('DOMContentLoaded', function () {
    for (let category of categories) {
        const newEl = document.createElement('div');
        newEl.classList.add('category');
        newEl.innerText = category;
        newEl.addEventListener('click', function () {
            onCategoryChoise(category);
        });
        document.querySelector('.categories').appendChild(newEl);
    }
});

function getFilmComments(filmName) {
    const film = getFilmByName(filmName);
    return film.comments;
}

function getFilmByName(filmName) {
    return film = films.filter(f => f.name == filmName)[0];
}

function onAddCommentClick(filmName) {
    const authorValue = document.getElementById('author-' + filmName).value;
    const commentValue = document.getElementById('comment-' + filmName).value;
    const starsValue = document.querySelector('input[name=rating]:checked').value;
    const film = getFilmByName(filmName);
    film.addComment(commentValue, authorValue, starsValue);
    onCategoryChoise(film.category);
}

function renderCommentForm(film) {
    let content =
        '<div class="form-title">Добавьте отзыв фильму ' +
        film.name +
        '</div><div class="form-body">' +
        '<input id="author-' + film.name + '" class="form-author" placeholder="no_name"><input  id="comment-' + film.name + '" class="form-comment" placeholder=""><fieldset class="rating">';

    for (let i = 1; i <= 5; i++) {
        content += '<input type="radio" name="rating" id="star' + i + '" value="' + (6 - i) + '"></input><label class="form-star" for="star' + i + '"></label>';
    }

    content += '</fieldset><button onclick="onAddCommentClick(\'' +
        film.name +
        '\')">Отправить</button>' +
        '</div>';
    const form = document.createElement('div');
    form.classList.add('comment-form');
    form.innerHTML = content;

    form.addEventListener('click', function (event) {
        event.stopPropagation();
        form.classList.add('chosen');
    });

    return form;
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = '';
    comments.forEach(c => {
        s += '<div class="comment"><div class="wrapper"><span class="comment-author">' +
            c.author +
            '</span>: ' +
            c.text +
            '</div>';

        s += '<div class="user-rating">';
        let stars = c.stars;
        for (let i = 0; i < 5; i++) {
            if (stars > 0) {
                s += '<i class="fas fa-star active fa-sm"></i>';
                stars--;
            } else {
                s += '<i class="far fa-star fa-xs"></i>';
            }
        }
        s += '</div></div>'
    });
    newEl.innerHTML += '<div class="film-comments">' + s + '</div>';

    const addCommentButton = document.createElement('button');
    addCommentButton.innerHTML = 'Добавить отзыв';
    addCommentButton.addEventListener('click', function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film, newEl) {
    if (oppenedFilms.hasOwnProperty(film.name) && oppenedFilms[film.name] == true) {
        newEl.innerHTML = '<div class="film-name">' + film.name + '</div>';
        oppenedFilms[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        oppenedFilms[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement('div');
    newEl.classList.add('film');
    newEl.innerHTML = '<div class="film-name">' + film.name + '</div>';

    newEl.addEventListener('click', function () {
        onFilmClick(film, newEl);
    });

    document.querySelector('.films').appendChild(newEl);
}

function onCategoryChoise(categoryName) {
    document.querySelector('.films').innerHTML = '';
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
}
