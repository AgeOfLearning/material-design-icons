import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGamesElement
 * @class IconRoundGamesElement
 * @extends {AoflElement}
 */
class IconRoundGamesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGamesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-games';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGamesElement.is, IconRoundGamesElement);

export default IconRoundGamesElement;
