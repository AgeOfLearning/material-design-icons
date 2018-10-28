import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHelpElement
 * @class IconOutlineHelpElement
 * @extends {AoflElement}
 */
class IconOutlineHelpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHelpElement.is, IconOutlineHelpElement);

export default IconOutlineHelpElement;
