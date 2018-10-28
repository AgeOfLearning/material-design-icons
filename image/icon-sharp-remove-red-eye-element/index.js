import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveRedEyeElement
 * @class IconSharpRemoveRedEyeElement
 * @extends {AoflElement}
 */
class IconSharpRemoveRedEyeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveRedEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove-red-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveRedEyeElement.is, IconSharpRemoveRedEyeElement);

export default IconSharpRemoveRedEyeElement;
