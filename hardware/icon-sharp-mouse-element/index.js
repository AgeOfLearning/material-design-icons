import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMouseElement
 * @class IconSharpMouseElement
 * @extends {AoflElement}
 */
class IconSharpMouseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMouseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mouse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMouseElement.is, IconSharpMouseElement);

export default IconSharpMouseElement;
