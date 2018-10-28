import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCrop169Element
 * @class IconOutlineCrop169Element
 * @extends {AoflElement}
 */
class IconOutlineCrop169Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineCrop169Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-16-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCrop169Element.is, IconOutlineCrop169Element);

export default IconOutlineCrop169Element;
