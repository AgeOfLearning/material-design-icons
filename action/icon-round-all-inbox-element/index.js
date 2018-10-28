import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAllInboxElement
 * @class IconRoundAllInboxElement
 * @extends {AoflElement}
 */
class IconRoundAllInboxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAllInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-all-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAllInboxElement.is, IconRoundAllInboxElement);

export default IconRoundAllInboxElement;
