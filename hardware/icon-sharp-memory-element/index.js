import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMemoryElement
 * @class IconSharpMemoryElement
 * @extends {AoflElement}
 */
class IconSharpMemoryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMemoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-memory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMemoryElement.is, IconSharpMemoryElement);

export default IconSharpMemoryElement;
