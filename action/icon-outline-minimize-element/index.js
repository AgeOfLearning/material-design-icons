import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMinimizeElement
 * @class IconOutlineMinimizeElement
 * @extends {AoflElement}
 */
class IconOutlineMinimizeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMinimizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-minimize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMinimizeElement.is, IconOutlineMinimizeElement);

export default IconOutlineMinimizeElement;
