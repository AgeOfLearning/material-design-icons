import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWarningElement
 * @class IconOutlineWarningElement
 * @extends {AoflElement}
 */
class IconOutlineWarningElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWarningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-warning';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWarningElement.is, IconOutlineWarningElement);

export default IconOutlineWarningElement;
