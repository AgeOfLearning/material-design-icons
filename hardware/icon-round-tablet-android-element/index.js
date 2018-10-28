import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTabletAndroidElement
 * @class IconRoundTabletAndroidElement
 * @extends {AoflElement}
 */
class IconRoundTabletAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTabletAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tablet-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTabletAndroidElement.is, IconRoundTabletAndroidElement);

export default IconRoundTabletAndroidElement;
