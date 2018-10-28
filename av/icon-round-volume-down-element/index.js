import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVolumeDownElement
 * @class IconRoundVolumeDownElement
 * @extends {AoflElement}
 */
class IconRoundVolumeDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVolumeDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-volume-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVolumeDownElement.is, IconRoundVolumeDownElement);

export default IconRoundVolumeDownElement;
