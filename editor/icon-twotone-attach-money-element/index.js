import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAttachMoneyElement
 * @class IconTwotoneAttachMoneyElement
 * @extends {AoflElement}
 */
class IconTwotoneAttachMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAttachMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-attach-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAttachMoneyElement.is, IconTwotoneAttachMoneyElement);

export default IconTwotoneAttachMoneyElement;
