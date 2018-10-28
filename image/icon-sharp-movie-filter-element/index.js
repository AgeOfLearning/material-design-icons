import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMovieFilterElement
 * @class IconSharpMovieFilterElement
 * @extends {AoflElement}
 */
class IconSharpMovieFilterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMovieFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-movie-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMovieFilterElement.is, IconSharpMovieFilterElement);

export default IconSharpMovieFilterElement;
