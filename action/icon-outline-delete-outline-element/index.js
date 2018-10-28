import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeleteOutlineElement
 * @class IconOutlineDeleteOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineDeleteOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeleteOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-delete-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeleteOutlineElement.is, IconOutlineDeleteOutlineElement);

export default IconOutlineDeleteOutlineElement;
