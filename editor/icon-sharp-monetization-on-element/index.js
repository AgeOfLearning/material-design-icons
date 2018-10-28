import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMonetizationOnElement
 * @class IconSharpMonetizationOnElement
 * @extends {AoflElement}
 */
class IconSharpMonetizationOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMonetizationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-monetization-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMonetizationOnElement.is, IconSharpMonetizationOnElement);

export default IconSharpMonetizationOnElement;
