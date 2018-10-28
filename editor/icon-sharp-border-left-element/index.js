import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderLeftElement
 * @class IconSharpBorderLeftElement
 * @extends {AoflElement}
 */
class IconSharpBorderLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderLeftElement.is, IconSharpBorderLeftElement);

export default IconSharpBorderLeftElement;
