import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRotateLeftElement
 * @class IconOutlineRotateLeftElement
 * @extends {AoflElement}
 */
class IconOutlineRotateLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRotateLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rotate-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRotateLeftElement.is, IconOutlineRotateLeftElement);

export default IconOutlineRotateLeftElement;
