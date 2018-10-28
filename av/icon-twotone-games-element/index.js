import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGamesElement
 * @class IconTwotoneGamesElement
 * @extends {AoflElement}
 */
class IconTwotoneGamesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGamesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-games';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGamesElement.is, IconTwotoneGamesElement);

export default IconTwotoneGamesElement;
