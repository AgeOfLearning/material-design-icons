import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkOffElement
 * @class IconSharpPhonelinkOffElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkOffElement.is, IconSharpPhonelinkOffElement);

export default IconSharpPhonelinkOffElement;
