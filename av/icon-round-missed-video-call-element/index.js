import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMissedVideoCallElement
 * @class IconRoundMissedVideoCallElement
 * @extends {AoflElement}
 */
class IconRoundMissedVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMissedVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-missed-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMissedVideoCallElement.is, IconRoundMissedVideoCallElement);

export default IconRoundMissedVideoCallElement;
