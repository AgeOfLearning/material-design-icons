import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBusinessElement
 * @class IconSharpBusinessElement
 * @extends {AoflElement}
 */
class IconSharpBusinessElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBusinessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-business';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBusinessElement.is, IconSharpBusinessElement);

export default IconSharpBusinessElement;
