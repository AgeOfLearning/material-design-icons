import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGamesElement
 * @class IconSharpGamesElement
 * @extends {AoflElement}
 */
class IconSharpGamesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGamesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-games';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGamesElement.is, IconSharpGamesElement);

export default IconSharpGamesElement;
