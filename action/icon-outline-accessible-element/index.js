import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessibleElement
 * @class IconOutlineAccessibleElement
 * @extends {AoflElement}
 */
class IconOutlineAccessibleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessibleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-accessible';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessibleElement.is, IconOutlineAccessibleElement);

export default IconOutlineAccessibleElement;
