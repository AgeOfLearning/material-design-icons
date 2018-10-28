import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposureElement
 * @class IconOutlineExposureElement
 * @extends {AoflElement}
 */
class IconOutlineExposureElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposureElement.is, IconOutlineExposureElement);

export default IconOutlineExposureElement;
