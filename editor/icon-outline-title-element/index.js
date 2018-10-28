import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTitleElement
 * @class IconOutlineTitleElement
 * @extends {AoflElement}
 */
class IconOutlineTitleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTitleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-title';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTitleElement.is, IconOutlineTitleElement);

export default IconOutlineTitleElement;
