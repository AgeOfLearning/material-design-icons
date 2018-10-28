import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPinDropElement
 * @class IconSharpPinDropElement
 * @extends {AoflElement}
 */
class IconSharpPinDropElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPinDropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pin-drop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPinDropElement.is, IconSharpPinDropElement);

export default IconSharpPinDropElement;
