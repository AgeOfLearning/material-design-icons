import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideocamOffElement
 * @class IconOutlineVideocamOffElement
 * @extends {AoflElement}
 */
class IconOutlineVideocamOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideocamOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-videocam-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideocamOffElement.is, IconOutlineVideocamOffElement);

export default IconOutlineVideocamOffElement;
