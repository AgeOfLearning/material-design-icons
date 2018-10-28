import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMovieCreationElement
 * @class IconRoundMovieCreationElement
 * @extends {AoflElement}
 */
class IconRoundMovieCreationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMovieCreationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-movie-creation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMovieCreationElement.is, IconRoundMovieCreationElement);

export default IconRoundMovieCreationElement;
