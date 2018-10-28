import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMonetizationOnElement
 * @class IconRoundMonetizationOnElement
 * @extends {AoflElement}
 */
class IconRoundMonetizationOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMonetizationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-monetization-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMonetizationOnElement.is, IconRoundMonetizationOnElement);

export default IconRoundMonetizationOnElement;
