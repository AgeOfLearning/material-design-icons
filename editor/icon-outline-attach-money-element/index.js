import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAttachMoneyElement
 * @class IconOutlineAttachMoneyElement
 * @extends {AoflElement}
 */
class IconOutlineAttachMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAttachMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-attach-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAttachMoneyElement.is, IconOutlineAttachMoneyElement);

export default IconOutlineAttachMoneyElement;
