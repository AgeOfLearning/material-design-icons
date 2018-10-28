import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoneyElement
 * @class IconRoundMoneyElement
 * @extends {AoflElement}
 */
class IconRoundMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoneyElement.is, IconRoundMoneyElement);

export default IconRoundMoneyElement;
