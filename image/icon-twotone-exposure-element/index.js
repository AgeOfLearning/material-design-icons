import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposureElement
 * @class IconTwotoneExposureElement
 * @extends {AoflElement}
 */
class IconTwotoneExposureElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposureElement.is, IconTwotoneExposureElement);

export default IconTwotoneExposureElement;
