import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposureZeroElement
 * @class IconOutlineExposureZeroElement
 * @extends {AoflElement}
 */
class IconOutlineExposureZeroElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposureZeroElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure-zero';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposureZeroElement.is, IconOutlineExposureZeroElement);

export default IconOutlineExposureZeroElement;
