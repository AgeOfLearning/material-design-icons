import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAndroidElement
 * @class IconBaselineAndroidElement
 * @extends {AoflElement}
 */
class IconBaselineAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAndroidElement.is, IconBaselineAndroidElement);

export default IconBaselineAndroidElement;
