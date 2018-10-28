import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMovieCreationElement
 * @class IconSharpMovieCreationElement
 * @extends {AoflElement}
 */
class IconSharpMovieCreationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMovieCreationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-movie-creation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMovieCreationElement.is, IconSharpMovieCreationElement);

export default IconSharpMovieCreationElement;
