import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMemoryElement
 * @class IconTwotoneMemoryElement
 * @extends {AoflElement}
 */
class IconTwotoneMemoryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMemoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-memory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMemoryElement.is, IconTwotoneMemoryElement);

export default IconTwotoneMemoryElement;
