export const createFilmCardControlsTemplate = ({watchlist, alreadyWatched, favorite}, isFilmEditing) =>
  `
    <div class="film-card__controls" style="position: absolute">
      <button
        class="
          film-card__controls-item
          film-card__controls-item--add-to-watchlist
          ${(watchlist) ? 'film-card__controls-item--active' : ''}
        "
        type="button"
        ${(isFilmEditing) ? 'disabled' : ''}
      >
        Add to watchlist
      </button>
      <button
        class="
          film-card__controls-item
          film-card__controls-item--mark-as-watched
          ${(alreadyWatched) ? 'film-card__controls-item--active' : ''}
        "
        type="button"
        ${(isFilmEditing) ? 'disabled' : ''}
      >
        Mark as watched
      </button>
      <button
        class="
          film-card__controls-item
          film-card__controls-item--favorite
          ${(favorite) ? 'film-card__controls-item--active' : ''}
        "
        type="button"
        ${(isFilmEditing) ? 'disabled' : ''}
      >
        Mark as favorite
      </button>
    </div>
  `;
