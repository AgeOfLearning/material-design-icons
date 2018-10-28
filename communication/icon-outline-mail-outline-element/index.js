import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMailOutlineElement
 * @class IconOutlineMailOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineMailOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMailOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mail-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMailOutlineElement.is, IconOutlineMailOutlineElement);

export default IconOutlineMailOutlineElement;
