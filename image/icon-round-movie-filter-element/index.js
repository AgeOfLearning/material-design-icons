import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMovieFilterElement
 * @class IconRoundMovieFilterElement
 * @extends {AoflElement}
 */
class IconRoundMovieFilterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMovieFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-movie-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMovieFilterElement.is, IconRoundMovieFilterElement);

export default IconRoundMovieFilterElement;
