import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHttpElement
 * @class IconOutlineHttpElement
 * @extends {AoflElement}
 */
class IconOutlineHttpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHttpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-http';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHttpElement.is, IconOutlineHttpElement);

export default IconOutlineHttpElement;
