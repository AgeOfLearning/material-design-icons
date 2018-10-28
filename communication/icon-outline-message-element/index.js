import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMessageElement
 * @class IconOutlineMessageElement
 * @extends {AoflElement}
 */
class IconOutlineMessageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMessageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-message';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMessageElement.is, IconOutlineMessageElement);

export default IconOutlineMessageElement;
