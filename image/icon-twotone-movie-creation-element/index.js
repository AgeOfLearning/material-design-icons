import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMovieCreationElement
 * @class IconTwotoneMovieCreationElement
 * @extends {AoflElement}
 */
class IconTwotoneMovieCreationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMovieCreationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-movie-creation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMovieCreationElement.is, IconTwotoneMovieCreationElement);

export default IconTwotoneMovieCreationElement;
