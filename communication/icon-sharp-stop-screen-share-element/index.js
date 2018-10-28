import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStopScreenShareElement
 * @class IconSharpStopScreenShareElement
 * @extends {AoflElement}
 */
class IconSharpStopScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStopScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stop-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStopScreenShareElement.is, IconSharpStopScreenShareElement);

export default IconSharpStopScreenShareElement;
