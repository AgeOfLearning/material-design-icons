import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposureNeg2Element
 * @class IconSharpExposureNeg2Element
 * @extends {AoflElement}
 */
class IconSharpExposureNeg2Element extends AoflElement {
  /**
   * Creates an instance of IconSharpExposureNeg2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure-neg-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposureNeg2Element.is, IconSharpExposureNeg2Element);

export default IconSharpExposureNeg2Element;
