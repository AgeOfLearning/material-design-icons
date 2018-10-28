import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAllOutElement
 * @class IconTwotoneAllOutElement
 * @extends {AoflElement}
 */
class IconTwotoneAllOutElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAllOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-all-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAllOutElement.is, IconTwotoneAllOutElement);

export default IconTwotoneAllOutElement;
