import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePagesElement
 * @class IconOutlinePagesElement
 * @extends {AoflElement}
 */
class IconOutlinePagesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePagesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pages';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePagesElement.is, IconOutlinePagesElement);

export default IconOutlinePagesElement;
