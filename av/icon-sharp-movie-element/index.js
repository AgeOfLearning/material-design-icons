import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMovieElement
 * @class IconSharpMovieElement
 * @extends {AoflElement}
 */
class IconSharpMovieElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMovieElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-movie';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMovieElement.is, IconSharpMovieElement);

export default IconSharpMovieElement;
