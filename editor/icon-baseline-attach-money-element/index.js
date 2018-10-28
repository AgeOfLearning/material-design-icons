import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAttachMoneyElement
 * @class IconBaselineAttachMoneyElement
 * @extends {AoflElement}
 */
class IconBaselineAttachMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAttachMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-attach-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAttachMoneyElement.is, IconBaselineAttachMoneyElement);

export default IconBaselineAttachMoneyElement;
