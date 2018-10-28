import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMovieElement
 * @class IconRoundMovieElement
 * @extends {AoflElement}
 */
class IconRoundMovieElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMovieElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-movie';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMovieElement.is, IconRoundMovieElement);

export default IconRoundMovieElement;
