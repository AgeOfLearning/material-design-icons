import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTabletAndroidElement
 * @class IconSharpTabletAndroidElement
 * @extends {AoflElement}
 */
class IconSharpTabletAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTabletAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tablet-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTabletAndroidElement.is, IconSharpTabletAndroidElement);

export default IconSharpTabletAndroidElement;
