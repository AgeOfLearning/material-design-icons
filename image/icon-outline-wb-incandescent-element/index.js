import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWbIncandescentElement
 * @class IconOutlineWbIncandescentElement
 * @extends {AoflElement}
 */
class IconOutlineWbIncandescentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWbIncandescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wb-incandescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWbIncandescentElement.is, IconOutlineWbIncandescentElement);

export default IconOutlineWbIncandescentElement;
