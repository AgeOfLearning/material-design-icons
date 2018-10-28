import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTabletAndroidElement
 * @class IconTwotoneTabletAndroidElement
 * @extends {AoflElement}
 */
class IconTwotoneTabletAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTabletAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tablet-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTabletAndroidElement.is, IconTwotoneTabletAndroidElement);

export default IconTwotoneTabletAndroidElement;
