import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoneyOffElement
 * @class IconRoundMoneyOffElement
 * @extends {AoflElement}
 */
class IconRoundMoneyOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoneyOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-money-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoneyOffElement.is, IconRoundMoneyOffElement);

export default IconRoundMoneyOffElement;
