import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalMoviesElement
 * @class IconSharpLocalMoviesElement
 * @extends {AoflElement}
 */
class IconSharpLocalMoviesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalMoviesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-movies';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalMoviesElement.is, IconSharpLocalMoviesElement);

export default IconSharpLocalMoviesElement;
