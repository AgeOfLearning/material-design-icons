import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWbIncandescentElement
 * @class IconSharpWbIncandescentElement
 * @extends {AoflElement}
 */
class IconSharpWbIncandescentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWbIncandescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wb-incandescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWbIncandescentElement.is, IconSharpWbIncandescentElement);

export default IconSharpWbIncandescentElement;
