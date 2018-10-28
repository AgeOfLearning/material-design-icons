import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSelectAllElement
 * @class IconTwotoneSelectAllElement
 * @extends {AoflElement}
 */
class IconTwotoneSelectAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSelectAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-select-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSelectAllElement.is, IconTwotoneSelectAllElement);

export default IconTwotoneSelectAllElement;
