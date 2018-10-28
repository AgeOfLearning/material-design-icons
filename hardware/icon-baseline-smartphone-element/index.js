import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSmartphoneElement
 * @class IconBaselineSmartphoneElement
 * @extends {AoflElement}
 */
class IconBaselineSmartphoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSmartphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-smartphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSmartphoneElement.is, IconBaselineSmartphoneElement);

export default IconBaselineSmartphoneElement;
