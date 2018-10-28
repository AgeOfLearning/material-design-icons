import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAttachMoneyElement
 * @class IconRoundAttachMoneyElement
 * @extends {AoflElement}
 */
class IconRoundAttachMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAttachMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-attach-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAttachMoneyElement.is, IconRoundAttachMoneyElement);

export default IconRoundAttachMoneyElement;
