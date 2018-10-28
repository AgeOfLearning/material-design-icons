import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDoneAllElement
 * @class IconOutlineDoneAllElement
 * @extends {AoflElement}
 */
class IconOutlineDoneAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDoneAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-done-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDoneAllElement.is, IconOutlineDoneAllElement);

export default IconOutlineDoneAllElement;
