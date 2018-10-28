import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAllOutElement
 * @class IconOutlineAllOutElement
 * @extends {AoflElement}
 */
class IconOutlineAllOutElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAllOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-all-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAllOutElement.is, IconOutlineAllOutElement);

export default IconOutlineAllOutElement;
