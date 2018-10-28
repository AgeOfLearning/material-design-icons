import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDoneAllElement
 * @class IconTwotoneDoneAllElement
 * @extends {AoflElement}
 */
class IconTwotoneDoneAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDoneAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-done-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDoneAllElement.is, IconTwotoneDoneAllElement);

export default IconTwotoneDoneAllElement;
