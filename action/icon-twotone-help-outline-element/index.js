import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHelpOutlineElement
 * @class IconTwotoneHelpOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneHelpOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHelpOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-help-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHelpOutlineElement.is, IconTwotoneHelpOutlineElement);

export default IconTwotoneHelpOutlineElement;
