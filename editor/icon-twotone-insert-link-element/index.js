import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertLinkElement
 * @class IconTwotoneInsertLinkElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertLinkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertLinkElement.is, IconTwotoneInsertLinkElement);

export default IconTwotoneInsertLinkElement;
