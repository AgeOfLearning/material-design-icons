import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropDinElement
 * @class IconOutlineCropDinElement
 * @extends {AoflElement}
 */
class IconOutlineCropDinElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropDinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-din';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropDinElement.is, IconOutlineCropDinElement);

export default IconOutlineCropDinElement;
