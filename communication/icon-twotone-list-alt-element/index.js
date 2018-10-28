import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneListAltElement
 * @class IconTwotoneListAltElement
 * @extends {AoflElement}
 */
class IconTwotoneListAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneListAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-list-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneListAltElement.is, IconTwotoneListAltElement);

export default IconTwotoneListAltElement;
