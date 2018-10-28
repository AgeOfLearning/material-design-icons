import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposureNeg1Element
 * @class IconOutlineExposureNeg1Element
 * @extends {AoflElement}
 */
class IconOutlineExposureNeg1Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposureNeg1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure-neg-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposureNeg1Element.is, IconOutlineExposureNeg1Element);

export default IconOutlineExposureNeg1Element;
