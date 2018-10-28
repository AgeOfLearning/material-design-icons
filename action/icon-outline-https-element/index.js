import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHttpsElement
 * @class IconOutlineHttpsElement
 * @extends {AoflElement}
 */
class IconOutlineHttpsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHttpsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-https';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHttpsElement.is, IconOutlineHttpsElement);

export default IconOutlineHttpsElement;
