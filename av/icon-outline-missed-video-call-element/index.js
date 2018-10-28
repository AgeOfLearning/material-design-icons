import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMissedVideoCallElement
 * @class IconOutlineMissedVideoCallElement
 * @extends {AoflElement}
 */
class IconOutlineMissedVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMissedVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-missed-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMissedVideoCallElement.is, IconOutlineMissedVideoCallElement);

export default IconOutlineMissedVideoCallElement;
