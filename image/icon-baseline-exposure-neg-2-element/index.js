import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposureNeg2Element
 * @class IconBaselineExposureNeg2Element
 * @extends {AoflElement}
 */
class IconBaselineExposureNeg2Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposureNeg2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure-neg-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposureNeg2Element.is, IconBaselineExposureNeg2Element);

export default IconBaselineExposureNeg2Element;
