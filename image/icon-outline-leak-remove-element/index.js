import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLeakRemoveElement
 * @class IconOutlineLeakRemoveElement
 * @extends {AoflElement}
 */
class IconOutlineLeakRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLeakRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-leak-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLeakRemoveElement.is, IconOutlineLeakRemoveElement);

export default IconOutlineLeakRemoveElement;
