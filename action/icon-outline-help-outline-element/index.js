import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHelpOutlineElement
 * @class IconOutlineHelpOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineHelpOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHelpOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-help-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHelpOutlineElement.is, IconOutlineHelpOutlineElement);

export default IconOutlineHelpOutlineElement;
