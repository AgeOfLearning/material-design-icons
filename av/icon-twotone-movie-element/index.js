import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMovieElement
 * @class IconTwotoneMovieElement
 * @extends {AoflElement}
 */
class IconTwotoneMovieElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMovieElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-movie';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMovieElement.is, IconTwotoneMovieElement);

export default IconTwotoneMovieElement;
