import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMonetizationOnElement
 * @class IconOutlineMonetizationOnElement
 * @extends {AoflElement}
 */
class IconOutlineMonetizationOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMonetizationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-monetization-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMonetizationOnElement.is, IconOutlineMonetizationOnElement);

export default IconOutlineMonetizationOnElement;
