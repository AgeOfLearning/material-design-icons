import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoneyOffElement
 * @class IconBaselineMoneyOffElement
 * @extends {AoflElement}
 */
class IconBaselineMoneyOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoneyOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-money-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoneyOffElement.is, IconBaselineMoneyOffElement);

export default IconBaselineMoneyOffElement;
