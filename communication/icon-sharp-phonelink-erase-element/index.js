import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkEraseElement
 * @class IconSharpPhonelinkEraseElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkEraseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkEraseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink-erase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkEraseElement.is, IconSharpPhonelinkEraseElement);

export default IconSharpPhonelinkEraseElement;
