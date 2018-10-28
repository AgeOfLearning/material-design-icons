import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertLinkElement
 * @class IconOutlineInsertLinkElement
 * @extends {AoflElement}
 */
class IconOutlineInsertLinkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertLinkElement.is, IconOutlineInsertLinkElement);

export default IconOutlineInsertLinkElement;
