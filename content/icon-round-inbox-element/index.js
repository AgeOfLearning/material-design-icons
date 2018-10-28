import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInboxElement
 * @class IconRoundInboxElement
 * @extends {AoflElement}
 */
class IconRoundInboxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInboxElement.is, IconRoundInboxElement);

export default IconRoundInboxElement;
