import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineColorizeElement
 * @class IconOutlineColorizeElement
 * @extends {AoflElement}
 */
class IconOutlineColorizeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineColorizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-colorize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineColorizeElement.is, IconOutlineColorizeElement);

export default IconOutlineColorizeElement;
