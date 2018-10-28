import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTabletAndroidElement
 * @class IconOutlineTabletAndroidElement
 * @extends {AoflElement}
 */
class IconOutlineTabletAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTabletAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tablet-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTabletAndroidElement.is, IconOutlineTabletAndroidElement);

export default IconOutlineTabletAndroidElement;
