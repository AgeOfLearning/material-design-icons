import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveElement
 * @class IconOutlineRemoveElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveElement.is, IconOutlineRemoveElement);

export default IconOutlineRemoveElement;
