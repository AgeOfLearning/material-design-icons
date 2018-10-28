import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideocamElement
 * @class IconOutlineVideocamElement
 * @extends {AoflElement}
 */
class IconOutlineVideocamElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideocamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-videocam';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideocamElement.is, IconOutlineVideocamElement);

export default IconOutlineVideocamElement;
