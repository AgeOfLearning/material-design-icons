import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAndroidElement
 * @class IconOutlineAndroidElement
 * @extends {AoflElement}
 */
class IconOutlineAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAndroidElement.is, IconOutlineAndroidElement);

export default IconOutlineAndroidElement;
