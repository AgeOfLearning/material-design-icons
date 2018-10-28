import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBookElement
 * @class IconTwotoneBookElement
 * @extends {AoflElement}
 */
class IconTwotoneBookElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-book';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBookElement.is, IconTwotoneBookElement);

export default IconTwotoneBookElement;
