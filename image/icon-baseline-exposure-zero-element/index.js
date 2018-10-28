import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposureZeroElement
 * @class IconBaselineExposureZeroElement
 * @extends {AoflElement}
 */
class IconBaselineExposureZeroElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposureZeroElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure-zero';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposureZeroElement.is, IconBaselineExposureZeroElement);

export default IconBaselineExposureZeroElement;
