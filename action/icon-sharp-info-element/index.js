import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInfoElement
 * @class IconSharpInfoElement
 * @extends {AoflElement}
 */
class IconSharpInfoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInfoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-info';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInfoElement.is, IconSharpInfoElement);

export default IconSharpInfoElement;
