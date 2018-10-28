import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTabletAndroidElement
 * @class IconBaselineTabletAndroidElement
 * @extends {AoflElement}
 */
class IconBaselineTabletAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTabletAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tablet-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTabletAndroidElement.is, IconBaselineTabletAndroidElement);

export default IconBaselineTabletAndroidElement;
