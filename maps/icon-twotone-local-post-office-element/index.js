import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPostOfficeElement
 * @class IconTwotoneLocalPostOfficeElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPostOfficeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPostOfficeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-post-office';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPostOfficeElement.is, IconTwotoneLocalPostOfficeElement);

export default IconTwotoneLocalPostOfficeElement;
