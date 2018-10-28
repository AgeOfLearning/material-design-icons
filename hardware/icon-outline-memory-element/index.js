import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMemoryElement
 * @class IconOutlineMemoryElement
 * @extends {AoflElement}
 */
class IconOutlineMemoryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMemoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-memory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMemoryElement.is, IconOutlineMemoryElement);

export default IconOutlineMemoryElement;
