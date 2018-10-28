import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkRingElement
 * @class IconSharpPhonelinkRingElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkRingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkRingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink-ring';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkRingElement.is, IconSharpPhonelinkRingElement);

export default IconSharpPhonelinkRingElement;
