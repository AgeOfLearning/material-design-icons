import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSmartphoneElement
 * @class IconSharpSmartphoneElement
 * @extends {AoflElement}
 */
class IconSharpSmartphoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSmartphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-smartphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSmartphoneElement.is, IconSharpSmartphoneElement);

export default IconSharpSmartphoneElement;
