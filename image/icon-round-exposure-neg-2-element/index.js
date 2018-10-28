import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposureNeg2Element
 * @class IconRoundExposureNeg2Element
 * @extends {AoflElement}
 */
class IconRoundExposureNeg2Element extends AoflElement {
  /**
   * Creates an instance of IconRoundExposureNeg2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure-neg-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposureNeg2Element.is, IconRoundExposureNeg2Element);

export default IconRoundExposureNeg2Element;
