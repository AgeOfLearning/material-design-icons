import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSelectAllElement
 * @class IconOutlineSelectAllElement
 * @extends {AoflElement}
 */
class IconOutlineSelectAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSelectAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-select-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSelectAllElement.is, IconOutlineSelectAllElement);

export default IconOutlineSelectAllElement;
