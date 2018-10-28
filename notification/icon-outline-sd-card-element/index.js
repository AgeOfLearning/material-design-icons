import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSdCardElement
 * @class IconOutlineSdCardElement
 * @extends {AoflElement}
 */
class IconOutlineSdCardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSdCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sd-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSdCardElement.is, IconOutlineSdCardElement);

export default IconOutlineSdCardElement;
