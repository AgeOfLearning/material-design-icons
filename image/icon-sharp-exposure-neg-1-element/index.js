import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposureNeg1Element
 * @class IconSharpExposureNeg1Element
 * @extends {AoflElement}
 */
class IconSharpExposureNeg1Element extends AoflElement {
  /**
   * Creates an instance of IconSharpExposureNeg1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure-neg-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposureNeg1Element.is, IconSharpExposureNeg1Element);

export default IconSharpExposureNeg1Element;
