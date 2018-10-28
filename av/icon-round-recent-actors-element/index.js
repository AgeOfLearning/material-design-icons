import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRecentActorsElement
 * @class IconRoundRecentActorsElement
 * @extends {AoflElement}
 */
class IconRoundRecentActorsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRecentActorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-recent-actors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRecentActorsElement.is, IconRoundRecentActorsElement);

export default IconRoundRecentActorsElement;
