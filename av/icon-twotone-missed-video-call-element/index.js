import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMissedVideoCallElement
 * @class IconTwotoneMissedVideoCallElement
 * @extends {AoflElement}
 */
class IconTwotoneMissedVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMissedVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-missed-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMissedVideoCallElement.is, IconTwotoneMissedVideoCallElement);

export default IconTwotoneMissedVideoCallElement;
