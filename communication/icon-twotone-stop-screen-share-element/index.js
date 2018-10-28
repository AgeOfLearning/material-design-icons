import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStopScreenShareElement
 * @class IconTwotoneStopScreenShareElement
 * @extends {AoflElement}
 */
class IconTwotoneStopScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStopScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stop-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStopScreenShareElement.is, IconTwotoneStopScreenShareElement);

export default IconTwotoneStopScreenShareElement;
