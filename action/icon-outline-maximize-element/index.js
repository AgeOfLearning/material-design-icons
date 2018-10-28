import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMaximizeElement
 * @class IconOutlineMaximizeElement
 * @extends {AoflElement}
 */
class IconOutlineMaximizeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMaximizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-maximize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMaximizeElement.is, IconOutlineMaximizeElement);

export default IconOutlineMaximizeElement;
