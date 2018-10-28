import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSchoolElement
 * @class IconOutlineSchoolElement
 * @extends {AoflElement}
 */
class IconOutlineSchoolElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSchoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-school';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSchoolElement.is, IconOutlineSchoolElement);

export default IconOutlineSchoolElement;
