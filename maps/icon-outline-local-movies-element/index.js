import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalMoviesElement
 * @class IconOutlineLocalMoviesElement
 * @extends {AoflElement}
 */
class IconOutlineLocalMoviesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalMoviesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-movies';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalMoviesElement.is, IconOutlineLocalMoviesElement);

export default IconOutlineLocalMoviesElement;
