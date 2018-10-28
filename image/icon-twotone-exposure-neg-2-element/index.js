import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposureNeg2Element
 * @class IconTwotoneExposureNeg2Element
 * @extends {AoflElement}
 */
class IconTwotoneExposureNeg2Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposureNeg2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure-neg-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposureNeg2Element.is, IconTwotoneExposureNeg2Element);

export default IconTwotoneExposureNeg2Element;
