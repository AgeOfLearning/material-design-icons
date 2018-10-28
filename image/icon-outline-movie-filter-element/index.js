import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMovieFilterElement
 * @class IconOutlineMovieFilterElement
 * @extends {AoflElement}
 */
class IconOutlineMovieFilterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMovieFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-movie-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMovieFilterElement.is, IconOutlineMovieFilterElement);

export default IconOutlineMovieFilterElement;
