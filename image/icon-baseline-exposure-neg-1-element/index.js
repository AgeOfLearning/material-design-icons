import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposureNeg1Element
 * @class IconBaselineExposureNeg1Element
 * @extends {AoflElement}
 */
class IconBaselineExposureNeg1Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposureNeg1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure-neg-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposureNeg1Element.is, IconBaselineExposureNeg1Element);

export default IconBaselineExposureNeg1Element;
