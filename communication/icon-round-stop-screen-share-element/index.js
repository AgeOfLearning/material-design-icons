import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStopScreenShareElement
 * @class IconRoundStopScreenShareElement
 * @extends {AoflElement}
 */
class IconRoundStopScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStopScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stop-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStopScreenShareElement.is, IconRoundStopScreenShareElement);

export default IconRoundStopScreenShareElement;
