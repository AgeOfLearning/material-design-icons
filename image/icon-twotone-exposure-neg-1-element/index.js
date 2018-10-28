import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposureNeg1Element
 * @class IconTwotoneExposureNeg1Element
 * @extends {AoflElement}
 */
class IconTwotoneExposureNeg1Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposureNeg1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure-neg-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposureNeg1Element.is, IconTwotoneExposureNeg1Element);

export default IconTwotoneExposureNeg1Element;
