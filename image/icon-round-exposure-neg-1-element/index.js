import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposureNeg1Element
 * @class IconRoundExposureNeg1Element
 * @extends {AoflElement}
 */
class IconRoundExposureNeg1Element extends AoflElement {
  /**
   * Creates an instance of IconRoundExposureNeg1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure-neg-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposureNeg1Element.is, IconRoundExposureNeg1Element);

export default IconRoundExposureNeg1Element;
