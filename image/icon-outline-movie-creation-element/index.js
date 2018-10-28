import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMovieCreationElement
 * @class IconOutlineMovieCreationElement
 * @extends {AoflElement}
 */
class IconOutlineMovieCreationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMovieCreationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-movie-creation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMovieCreationElement.is, IconOutlineMovieCreationElement);

export default IconOutlineMovieCreationElement;
