import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposureZeroElement
 * @class IconTwotoneExposureZeroElement
 * @extends {AoflElement}
 */
class IconTwotoneExposureZeroElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposureZeroElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure-zero';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposureZeroElement.is, IconTwotoneExposureZeroElement);

export default IconTwotoneExposureZeroElement;
