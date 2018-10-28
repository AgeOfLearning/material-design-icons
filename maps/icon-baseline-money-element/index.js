import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoneyElement
 * @class IconBaselineMoneyElement
 * @extends {AoflElement}
 */
class IconBaselineMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoneyElement.is, IconBaselineMoneyElement);

export default IconBaselineMoneyElement;
