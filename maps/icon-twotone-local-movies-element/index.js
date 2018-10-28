import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalMoviesElement
 * @class IconTwotoneLocalMoviesElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalMoviesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalMoviesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-movies';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalMoviesElement.is, IconTwotoneLocalMoviesElement);

export default IconTwotoneLocalMoviesElement;
