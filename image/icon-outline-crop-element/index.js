import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropElement
 * @class IconOutlineCropElement
 * @extends {AoflElement}
 */
class IconOutlineCropElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropElement.is, IconOutlineCropElement);

export default IconOutlineCropElement;
