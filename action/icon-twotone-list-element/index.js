import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneListElement
 * @class IconTwotoneListElement
 * @extends {AoflElement}
 */
class IconTwotoneListElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneListElement.is, IconTwotoneListElement);

export default IconTwotoneListElement;
