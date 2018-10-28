import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonPinElement
 * @class IconSharpPersonPinElement
 * @extends {AoflElement}
 */
class IconSharpPersonPinElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonPinElement.is, IconSharpPersonPinElement);

export default IconSharpPersonPinElement;
