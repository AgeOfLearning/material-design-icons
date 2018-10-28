import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEmailElement
 * @class IconSharpEmailElement
 * @extends {AoflElement}
 */
class IconSharpEmailElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEmailElement.is, IconSharpEmailElement);

export default IconSharpEmailElement;
