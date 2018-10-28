import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAndroidElement
 * @class IconRoundAndroidElement
 * @extends {AoflElement}
 */
class IconRoundAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAndroidElement.is, IconRoundAndroidElement);

export default IconRoundAndroidElement;
