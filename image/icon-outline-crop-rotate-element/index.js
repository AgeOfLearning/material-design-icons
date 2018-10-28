import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropRotateElement
 * @class IconOutlineCropRotateElement
 * @extends {AoflElement}
 */
class IconOutlineCropRotateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropRotateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-rotate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropRotateElement.is, IconOutlineCropRotateElement);

export default IconOutlineCropRotateElement;
