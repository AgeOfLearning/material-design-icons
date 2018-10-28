import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddElement
 * @class IconOutlineAddElement
 * @extends {AoflElement}
 */
class IconOutlineAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddElement.is, IconOutlineAddElement);

export default IconOutlineAddElement;
