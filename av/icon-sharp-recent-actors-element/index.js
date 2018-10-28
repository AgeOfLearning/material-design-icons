import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRecentActorsElement
 * @class IconSharpRecentActorsElement
 * @extends {AoflElement}
 */
class IconSharpRecentActorsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRecentActorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-recent-actors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRecentActorsElement.is, IconSharpRecentActorsElement);

export default IconSharpRecentActorsElement;
