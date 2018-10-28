import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPostOfficeElement
 * @class IconOutlineLocalPostOfficeElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPostOfficeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPostOfficeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-post-office';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPostOfficeElement.is, IconOutlineLocalPostOfficeElement);

export default IconOutlineLocalPostOfficeElement;
