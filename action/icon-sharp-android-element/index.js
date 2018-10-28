import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAndroidElement
 * @class IconSharpAndroidElement
 * @extends {AoflElement}
 */
class IconSharpAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAndroidElement.is, IconSharpAndroidElement);

export default IconSharpAndroidElement;
