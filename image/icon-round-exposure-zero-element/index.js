import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposureZeroElement
 * @class IconRoundExposureZeroElement
 * @extends {AoflElement}
 */
class IconRoundExposureZeroElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExposureZeroElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure-zero';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposureZeroElement.is, IconRoundExposureZeroElement);

export default IconRoundExposureZeroElement;
