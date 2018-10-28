import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStopScreenShareElement
 * @class IconOutlineStopScreenShareElement
 * @extends {AoflElement}
 */
class IconOutlineStopScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStopScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stop-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStopScreenShareElement.is, IconOutlineStopScreenShareElement);

export default IconOutlineStopScreenShareElement;
