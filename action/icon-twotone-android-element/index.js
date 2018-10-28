import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAndroidElement
 * @class IconTwotoneAndroidElement
 * @extends {AoflElement}
 */
class IconTwotoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAndroidElement.is, IconTwotoneAndroidElement);

export default IconTwotoneAndroidElement;
