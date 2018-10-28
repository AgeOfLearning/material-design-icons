import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkSetupElement
 * @class IconSharpPhonelinkSetupElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkSetupElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkSetupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink-setup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkSetupElement.is, IconSharpPhonelinkSetupElement);

export default IconSharpPhonelinkSetupElement;
