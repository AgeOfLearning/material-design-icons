import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTabUnselectedElement
 * @class IconOutlineTabUnselectedElement
 * @extends {AoflElement}
 */
class IconOutlineTabUnselectedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTabUnselectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tab-unselected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTabUnselectedElement.is, IconOutlineTabUnselectedElement);

export default IconOutlineTabUnselectedElement;
