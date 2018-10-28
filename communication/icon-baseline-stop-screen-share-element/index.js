import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStopScreenShareElement
 * @class IconBaselineStopScreenShareElement
 * @extends {AoflElement}
 */
class IconBaselineStopScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStopScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stop-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStopScreenShareElement.is, IconBaselineStopScreenShareElement);

export default IconBaselineStopScreenShareElement;
