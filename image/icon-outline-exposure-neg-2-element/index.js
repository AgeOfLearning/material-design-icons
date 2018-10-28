import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposureNeg2Element
 * @class IconOutlineExposureNeg2Element
 * @extends {AoflElement}
 */
class IconOutlineExposureNeg2Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposureNeg2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure-neg-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposureNeg2Element.is, IconOutlineExposureNeg2Element);

export default IconOutlineExposureNeg2Element;
