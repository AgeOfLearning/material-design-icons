import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMovieFilterElement
 * @class IconTwotoneMovieFilterElement
 * @extends {AoflElement}
 */
class IconTwotoneMovieFilterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMovieFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-movie-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMovieFilterElement.is, IconTwotoneMovieFilterElement);

export default IconTwotoneMovieFilterElement;
