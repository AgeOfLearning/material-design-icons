import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropPortraitElement
 * @class IconOutlineCropPortraitElement
 * @extends {AoflElement}
 */
class IconOutlineCropPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropPortraitElement.is, IconOutlineCropPortraitElement);

export default IconOutlineCropPortraitElement;
