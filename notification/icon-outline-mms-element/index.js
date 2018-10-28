import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMmsElement
 * @class IconOutlineMmsElement
 * @extends {AoflElement}
 */
class IconOutlineMmsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMmsElement.is, IconOutlineMmsElement);

export default IconOutlineMmsElement;
