import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeleteOutlineElement
 * @class IconSharpDeleteOutlineElement
 * @extends {AoflElement}
 */
class IconSharpDeleteOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeleteOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-delete-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeleteOutlineElement.is, IconSharpDeleteOutlineElement);

export default IconSharpDeleteOutlineElement;
