import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMenuElement
 * @class IconSharpMenuElement
 * @extends {AoflElement}
 */
class IconSharpMenuElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMenuElement.is, IconSharpMenuElement);

export default IconSharpMenuElement;
