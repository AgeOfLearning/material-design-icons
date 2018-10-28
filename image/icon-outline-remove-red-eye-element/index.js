import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveRedEyeElement
 * @class IconOutlineRemoveRedEyeElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveRedEyeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveRedEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove-red-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveRedEyeElement.is, IconOutlineRemoveRedEyeElement);

export default IconOutlineRemoveRedEyeElement;
