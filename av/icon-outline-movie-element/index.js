import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMovieElement
 * @class IconOutlineMovieElement
 * @extends {AoflElement}
 */
class IconOutlineMovieElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMovieElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-movie';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMovieElement.is, IconOutlineMovieElement);

export default IconOutlineMovieElement;
