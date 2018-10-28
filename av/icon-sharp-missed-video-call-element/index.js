import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMissedVideoCallElement
 * @class IconSharpMissedVideoCallElement
 * @extends {AoflElement}
 */
class IconSharpMissedVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMissedVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-missed-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMissedVideoCallElement.is, IconSharpMissedVideoCallElement);

export default IconSharpMissedVideoCallElement;
