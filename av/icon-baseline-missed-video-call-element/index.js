import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMissedVideoCallElement
 * @class IconBaselineMissedVideoCallElement
 * @extends {AoflElement}
 */
class IconBaselineMissedVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMissedVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-missed-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMissedVideoCallElement.is, IconBaselineMissedVideoCallElement);

export default IconBaselineMissedVideoCallElement;
