import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGamesElement
 * @class IconOutlineGamesElement
 * @extends {AoflElement}
 */
class IconOutlineGamesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGamesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-games';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGamesElement.is, IconOutlineGamesElement);

export default IconOutlineGamesElement;
