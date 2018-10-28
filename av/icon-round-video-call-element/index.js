import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideoCallElement
 * @class IconRoundVideoCallElement
 * @extends {AoflElement}
 */
class IconRoundVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideoCallElement.is, IconRoundVideoCallElement);

export default IconRoundVideoCallElement;
