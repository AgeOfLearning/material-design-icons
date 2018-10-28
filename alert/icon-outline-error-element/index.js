import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineErrorElement
 * @class IconOutlineErrorElement
 * @extends {AoflElement}
 */
class IconOutlineErrorElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineErrorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-error';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineErrorElement.is, IconOutlineErrorElement);

export default IconOutlineErrorElement;
