import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineErrorOutlineElement
 * @class IconOutlineErrorOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineErrorOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineErrorOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-error-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineErrorOutlineElement.is, IconOutlineErrorOutlineElement);

export default IconOutlineErrorOutlineElement;
