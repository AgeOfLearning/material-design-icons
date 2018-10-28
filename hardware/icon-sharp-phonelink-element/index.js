import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkElement
 * @class IconSharpPhonelinkElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkElement.is, IconSharpPhonelinkElement);

export default IconSharpPhonelinkElement;
