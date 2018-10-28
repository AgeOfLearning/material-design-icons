import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRecentActorsElement
 * @class IconTwotoneRecentActorsElement
 * @extends {AoflElement}
 */
class IconTwotoneRecentActorsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRecentActorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-recent-actors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRecentActorsElement.is, IconTwotoneRecentActorsElement);

export default IconTwotoneRecentActorsElement;
