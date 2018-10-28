import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalMoviesElement
 * @class IconRoundLocalMoviesElement
 * @extends {AoflElement}
 */
class IconRoundLocalMoviesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalMoviesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-movies';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalMoviesElement.is, IconRoundLocalMoviesElement);

export default IconRoundLocalMoviesElement;
